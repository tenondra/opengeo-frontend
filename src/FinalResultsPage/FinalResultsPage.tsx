import { useApolloClient, useReactiveVar } from "@apollo/client";
import { Box, Button, Flex, Heading, Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import {
  LobbyModelStateEnumUpdate,
  useChangeLobbyStateMutation,
  useFinalResultsLazyQuery,
  useLobbyPlayerLeaveLobbyMutation,
} from '../backend/model';
import { guessIdVar, lobbyIdVar, locationIdVar, playerIdVar } from '../Utils/Cache';
import { Error, Loading, notEmpty } from '../Utils/Utils';
import { LatLngTuple } from 'leaflet';
import { useRef, useState } from 'react';
import MapWithResults from '../Components/MapWithResults';
import LocationSwitchButtons from './LocationSwitchButtons';
import FinalStatistics from './FinalStatistics';
import StreetView from '../Components/StreetView';
import useStateData from '../Utils/StateManagement';
import BaseVerticalPageLayout from '../Components/BasePageLayout';
import { NEGATIVE_COLOR_SCHEME } from '../Utils/theme';
import { FaAngleLeft, FaAngleRight, FaStreetView } from 'react-icons/all';

/*
 * Page containing results of a game
 * */
export default function FinalResultsPage() {
  const [mapOpen, setMapOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [firstLocationSet, setFirstLocationSet] = useState(false);
  //Refs used for automatic scrolling of buttons
  const locationButtons = useRef<Array<HTMLButtonElement>>([]);

  const playerId = useReactiveVar(playerIdVar);
  const lobbyId = useReactiveVar(lobbyIdVar);
  const [stateLoading, stateData] = useStateData();
  const { lobby } = stateData;

  const [loadData, { data, loading, error }] = useFinalResultsLazyQuery({
    variables: { lobbyId: lobbyId! },
    pollInterval: 4000,
    fetchPolicy: "network-only"
  });
  const client = useApolloClient();
  const [leaveLobby, { loading: leaveLoading, error: leaveError }] = useLobbyPlayerLeaveLobbyMutation({
    variables: {
      id: playerId!
    }
  });
  const [closeLobby] = useChangeLobbyStateMutation({
    variables: { id: lobbyId!, state: LobbyModelStateEnumUpdate.Closed }
  });

  const leave = async () => {
    //Leave the lobby
    locationIdVar(undefined);
    guessIdVar(undefined);
    client.cache.evict({ fieldName: "currentLocation" });
    client.cache.evict({ fieldName: "currentGuess" });
    if (isOwner) {
      await closeLobby();
    } else {
      await leaveLobby();
    }
  };

  if (stateLoading || loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!data) {
    loadData();
    return <Loading />;
  }

  const isOwner = lobby?.owner?.id?.toString() === playerId;

  const selectedTargetLocation = data?.finalResults?.[0]?.locations?.[selectedLocation];
  const targetLocation: LatLngTuple = [selectedTargetLocation!.latitude!, selectedTargetLocation!.longitude!];

  if (!firstLocationSet) {
    // Select the location from the last round
    setSelectedLocation((data?.finalResults?.[0]?.locations?.length ?? 1) - 1);
    setFirstLocationSet(true);
  }

  const modifiedResults =
    data.finalResults
      ?.map(r => {
        return { ...r?.results?.[selectedLocation], lobbyPlayer: r?.lobbyPlayer };
      })
      .filter(notEmpty) ?? [];

  return (
    <BaseVerticalPageLayout>
      <Heading paddingBottom={3}>Game Results</Heading>
      <Flex key="map" h="50vh" w="80vw" justify="center" align="center">
        {/*Button for left navigation between locations*/}
        <Box
          as="button"
          key="left"
          height={'10rem'}
          layerStyle="coloredHoverButton"
          shadow="0 0 .5rem"
          borderRadius=".5rem"
          onClick={() => {
            const newLocation =
              selectedLocation >= 1 ? selectedLocation - 1 : (data?.finalResults?.[0]?.locations?.length ?? 1) - 1;
            setSelectedLocation(newLocation);
            locationButtons.current[newLocation].scrollIntoView({ behavior: "smooth", inline: "center" });
          }}
        >
          <FaAngleLeft key="left" size="3rem" />
        </Box>
        <Box style={{ width: '100%', height: '100%' }} position={'relative'}>
          <MapWithResults target={targetLocation} results={modifiedResults} />
          {/*Streetview peek to the location*/}
          <Flex
            position="absolute"
            p={2}
            onMouseEnter={() => setMapOpen(true)}
            onMouseLeave={() => setMapOpen(false)}
            zIndex={10000}
            bottom={0}
            left={0}
            background="rgba(0, 0, 0, 0.2)"
            justify="center"
            align="center"
          >
            <Box as="button" layerStyle="coloredButton">
              <FaStreetView size="2rem" />
            </Box>
            <Popover isOpen={mapOpen} placement="top-start" trigger="hover">
              <PopoverTrigger>
                <Box position="absolute" left={1} bottom={-1} w={0} h={0} />
              </PopoverTrigger>
              <PopoverContent borderWidth={0}>
                <PopoverBody position="absolute" left={0} bottom={0} p={0} h="40vh" w="45vw" zIndex={10001}>
                  <StreetView
                    startingLocation={[
                      data?.finalResults?.[0]?.locations?.[selectedLocation]?.latitude ?? 0,
                      data?.finalResults?.[0]?.locations?.[selectedLocation]?.longitude ?? 0
                    ]}
                    style={{ bottom: 0, zIndex: 100000, width: "100%", height: "100%" }}
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Box>
        {/*Button for right location navigation*/}
        <Box
          as="button"
          key="right"
          height={'10rem'}
          layerStyle="coloredHoverButton"
          shadow="0 0 .5rem"
          borderRadius=".5rem"
          onClick={() => {
            const newLocation = (selectedLocation + 1) % (data?.finalResults?.[0]?.locations?.length ?? 1);
            setSelectedLocation(newLocation);
            locationButtons.current[newLocation].scrollIntoView({ behavior: "smooth", inline: "center" });
          }}
        >
          <FaAngleRight key={'right'} size="3rem" />
        </Box>
      </Flex>
      <LocationSwitchButtons
        locations={data?.finalResults?.[0]?.locations ?? []}
        selectedIdx={selectedLocation}
        setSelectedIdx={setSelectedLocation}
        buttonHrefs={locationButtons}
      />
      <Flex marginTop={3}>
        {leaveError && <Error />}
        {!isOwner && (
          <Button isLoading={leaveLoading} onClick={leave} colorScheme={NEGATIVE_COLOR_SCHEME}>
            {'Leave'}
          </Button>
        )}
        {/* TODO restart lobby etc. */}
        {isOwner && (
          <Button isLoading={leaveLoading} onClick={leave} colorScheme={NEGATIVE_COLOR_SCHEME}>
            {'Close Lobby'}
          </Button>
        )}
      </Flex>
      <Flex key="results" justify="center" w="90%" paddingTop={3}>
        <FinalStatistics results={data?.finalResults?.filter(notEmpty) ?? []} selectedLocation={selectedLocation} />
      </Flex>
    </BaseVerticalPageLayout>
  );
}
