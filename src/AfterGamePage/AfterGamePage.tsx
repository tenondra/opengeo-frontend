import { useReactiveVar } from '@apollo/client';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { LatLngTuple } from 'leaflet';
import { LobbyPlayerModelStateEnumUpdate, useChangePlayerStateMutation, useResultsLazyQuery } from '../backend/model';
import { gameIdVar, guessIdVar, locationIdVar, playerIdVar } from '../Utils/Cache';
import { Error, Loading, notEmpty } from '../Utils/Utils';
import RoundStatistics from './RoundStatistics';
import MapWithResults from '../Components/MapWithResults';
import { BaseVerticalPageLayout } from '../Components/BasePageLayout';

/*
 * Page with results after a game round
 * */
export default function AfterGamePage() {
  const playerId = useReactiveVar(playerIdVar);
  const gameId = useReactiveVar(gameIdVar);
  const guessId = useReactiveVar(guessIdVar);
  const locationId = useReactiveVar(locationIdVar);
  // Fetch results periodically
  // TODO: subscription
  const [loadResults, { data, loading, error }] = useResultsLazyQuery({
    variables: { locationId: locationId!, lobbyGameId: gameId! },
    pollInterval: 4000,
    fetchPolicy: "network-only"
  });

  const [setState, { loading: changeStateLoading }] = useChangePlayerStateMutation();

  if (loading) {
    return <Loading />;
  }

  if (error) return <Error />;

  console.log("AFTER GAME");
  console.log(guessId);

  if (!data) {
    if (locationId) {
      console.log("LOADING RESULTS");
      loadResults();
    }
    return <Loading />;
  }

  console.log(data);

  const targetLocation: LatLngTuple = [data!.results!.location!.latitude!, data!.results!.location!.longitude!];

  const onStateChange = async function() {
    guessIdVar(undefined);
    await setState({
      variables: {
        id: playerId!,
        state: LobbyPlayerModelStateEnumUpdate.InGame
      }
    });
  };

  const results = data.results?.results
    ? [...data.results.results].filter(notEmpty).sort((a, b) => (b?.score ?? 0) - (a?.score ?? 0))
    : [];

  return (
    <BaseVerticalPageLayout>
      <Heading paddingBottom={3}>Round results</Heading>
      <Flex key="map" h="50vh" w="80vw" justify="center" align="center">
        <MapWithResults target={targetLocation} results={results} />
      </Flex>
      <Flex marginTop={3}>
        <Button
          onClick={onStateChange}
          variant="solid"
          size="lg"
          disabled={changeStateLoading}
          isLoading={changeStateLoading}
        >
          Start next round
        </Button>
      </Flex>
      <Flex key="results" justify="center" w="90%" paddingTop={3}>
        <RoundStatistics results={results!} />
      </Flex>
    </BaseVerticalPageLayout>
  );
}
