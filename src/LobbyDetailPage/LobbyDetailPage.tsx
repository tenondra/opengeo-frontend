import { useApolloClient, useReactiveVar } from '@apollo/client';
import { Button, Container, Divider, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import {
  LobbyModelStateEnumUpdate,
  LobbyPlayerModelStateEnum,
  LobbyPlayerModelStateEnumUpdate,
  RandomLocation,
  RandomLocationsDocument,
  RandomLocationsQuery,
  RandomLocationsQueryVariables,
  useBulkLocationMutation,
  useChangeLobbyStateMutation,
  useChangePlayerStateMutation,
  useGameCreateMutation,
  useLobbyGameCreateMutation,
  useLobbyPlayerLeaveLobbyMutation,
} from '../backend/model';
import { lobbyIdVar, playerIdVar } from '../Utils/Cache';
import { Loading, notEmpty } from '../Utils/Utils';
import LobbyInfo from './LobbyInfo';
import { BaseHorizontalPageLayout } from '../Components/BasePageLayout';
import CreateGame from './CreateGame';
import useStateData from '../Utils/StateManagement';
import { NEGATIVE_COLOR_SCHEME } from '../Utils/theme';

/*
 * Transforms generated locations to the nearest streetview locations
 * */
async function getStreetViewLocations(locations: RandomLocation[]): Promise<google.maps.StreetViewPanoramaData[]> {
  const service = new window.google.maps.StreetViewService();
  const results = await Promise.all(
    locations.map(async loc => {
      if (!loc.latitude || !loc.longitude) return null;
      const location = new window.google.maps.LatLng(loc.latitude, loc.longitude);
      // Call the javascript maps api'
      try {
        const ret = await service.getPanorama({
          location: location,
          radius: 10000,
          preference: window.google.maps.StreetViewPreference.BEST,
          source: window.google.maps.StreetViewSource.OUTDOOR,
        });
        return ret?.data;
      } catch (e) {
        return null;
      }
    })
  );
  console.log(results);
  return results.filter(notEmpty);
}

/*
 * Page for showing the details of a lobby
 * */
export default function LobbyDetailPage() {
  const playerId = useReactiveVar(playerIdVar);
  const lobbyId = useReactiveVar(lobbyIdVar);
  const [stateLoading, stateData] = useStateData();
  const { lobby, lobbyPlayer } = stateData;

  const client = useApolloClient();
  const [setState, { loading: updateStateLoading }] = useChangePlayerStateMutation();
  const [leaveLobby, { loading: leaveLoading }] = useLobbyPlayerLeaveLobbyMutation({
    variables: {
      id: playerId!,
    },
  });
  const [closeLobby] = useChangeLobbyStateMutation({
    variables: { id: lobbyId!, state: LobbyModelStateEnumUpdate.Closed },
  });
  const [setLobbyState] = useChangeLobbyStateMutation();
  const [createGame] = useGameCreateMutation();
  const [createLobbyGame] = useLobbyGameCreateMutation();
  const [createMultipleLocations] = useBulkLocationMutation();

  let creatingGame = false;
  console.log(lobbyPlayer);

  if (stateLoading) return <Loading />;

  const leave = async () => {
    if (isOwner) {
      await closeLobby();
    } else {
      await leaveLobby();
    }
  };

  /*
   * Generate locations based on the user form
   * */
  const generateLocations = async function ({
    game,
    rounds,
    minDensity,
    maxDensity,
  }: {
    game: string;
    rounds: number;
    minDensity: number;
    maxDensity: number;
  }) {
    console.log('Getting locations');
    // Query the backend with 5* the amount to have some headroom for finding nearest streetviews
    let streetViews: google.maps.StreetViewPanoramaData[] = [];
    while (streetViews.length < rounds) {
      const randomLocations = await client.query<RandomLocationsQuery, RandomLocationsQueryVariables>({
        query: RandomLocationsDocument,
        variables: { count: Math.max(rounds * 5, 40), minDensity: minDensity, maxDensity: maxDensity },
        fetchPolicy: 'network-only',
      });
      if (!randomLocations.data || !randomLocations.data.randomLocation) {
        return null;
      }
      console.log(randomLocations);
      // Convert them to streetview locations
      streetViews = [
        ...streetViews,
        ...(await getStreetViewLocations(randomLocations.data.randomLocation.filter(notEmpty))),
      ];
    }
    // And create them on the backend
    return await createMultipleLocations({
      variables: {
        locations: streetViews.slice(0, rounds).map(s => {
          return {
            latitude: s.location!.latLng!.lat(),
            longitude: s.location!.latLng!.lng(),
            game: game,
          };
        }),
      },
    });
  };

  const isOwner = lobby?.owner?.id?.toString() === playerId?.toString() ?? '-1';
  const isReady = lobbyPlayer && lobbyPlayer.state === 'READY';
  const canStart = isOwner && isReady && lobby!.lobbyPlayers?.every(p => p!.state === LobbyPlayerModelStateEnum.Ready);

  console.log(lobbyId);
  console.log(lobby);
  console.log(lobby?.owner?.id?.toString());

  const updateSelfState = async () => {
    const readyResult = await setState({
      variables: {
        id: playerId!,
        state: isReady ? LobbyPlayerModelStateEnumUpdate.Idle : LobbyPlayerModelStateEnumUpdate.Ready,
      },
    });
    console.log(readyResult);
  };

  const updateLobbyState = async (values: {
    limit: number;
    rounds: number;
    minDensity: number;
    maxDensity: number;
  }) => {
    if (isOwner && canStart) {
      if (creatingGame) return;
      creatingGame = true;

      const game = await createGame({
        variables: {
          name: lobbyId + '-game',
          timeLimit: values.limit + 5,
        },
      });
      const locations = await generateLocations({
        game: game!.data!.gameCreate!.gamemodel!.id,
        rounds: values.rounds,
        minDensity: values.minDensity,
        maxDensity: values.maxDensity,
      });
      console.log(locations);
      const lobbyGame = await createLobbyGame({
        variables: {
          lobbyId: lobbyId!,
          gameId: game.data?.gameCreate?.gamemodel?.id ?? '-1',
        },
      });
      console.log(lobbyGame);
      await setLobbyState({
        variables: {
          id: lobbyId!,
          state: LobbyModelStateEnumUpdate.Running,
        },
      });
    }
  };

  return (
    <BaseHorizontalPageLayout>
      <Grid templateColumns={['2fr', 'auto', '1fr']} gap={2} layerStyle="contentBox">
        <GridItem>
          <Flex layerStyle="contentBox">
            <LobbyInfo lobbyData={lobby} isOwner={isOwner} />
          </Flex>
        </GridItem>
        <GridItem colStart={2}>
          <Divider orientation="vertical" />
        </GridItem>
        <GridItem colStart={3}>
          <Flex layerStyle="contentBox">
            <Heading paddingBottom={5}>Settings</Heading>
            <Container align="center" width="100%">
              <CreateGame updateLobbyState={updateLobbyState} isOwner={isOwner} canStart={canStart ?? false} />
              <Flex layerStyle="hStack" paddingTop={5}>
                <Button onClick={leave} isLoading={leaveLoading} colorScheme={NEGATIVE_COLOR_SCHEME}>
                  Leave
                </Button>
                <Button onClick={updateSelfState} isLoading={updateStateLoading}>
                  {isReady ? 'Not Ready' : 'Ready'}
                </Button>
              </Flex>
            </Container>
          </Flex>
        </GridItem>
      </Grid>
    </BaseHorizontalPageLayout>
  );
}
