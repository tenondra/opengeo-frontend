import { useApolloClient, useReactiveVar } from '@apollo/client';
import { Text } from '@chakra-ui/layout';
import { Box, Button, Flex, HStack, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { LatLng } from 'leaflet';
import { useState } from 'react';
import { TileLayer } from 'react-leaflet';
import { useCreateGuessMutation, useFinishGuessMutation } from '../backend/model';
import { colorSchemeVar, gameIdVar, guessIdVar, playerIdVar, roundNumberVar } from '../Utils/Cache';
import { deleteFromCache } from '../Utils/CacheTools';
import { Error, Loading } from '../Utils/Utils';
import AddMarker from './AddMarker';
import MinimapControl from './MiniMap';
import StreetView from '../Components/StreetView';
import useStateData from '../Utils/StateManagement';
import ResizableMap from '../Components/ResizableMap';
import Countdown from 'react-countdown';
import RenderTime from './RenderTime';
import { FaAngleDoubleUp, FaMapMarkedAlt } from 'react-icons/all';

/*
 * Page for the game part itself
 * */
export default function GamePage() {
  const [mapOpen, setMapOpen] = useState(false);
  const [guessMarker, setGuessMarker] = useState(new LatLng(0, 0));
  const [forcedReload, setForcedReload] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [guessCreating, setGuessCreating] = useState(false);

  const guessId = useReactiveVar(guessIdVar);
  const playerId = useReactiveVar(playerIdVar);
  const gameId = useReactiveVar(gameIdVar);
  const roundNumber = useReactiveVar(roundNumberVar);
  const colorScheme = useReactiveVar(colorSchemeVar);
  const [stateLoading, stateData] = useStateData();
  const { lobby, guess, game, location, refetch } = stateData;

  const [createGuess, { loading: createLoading, error: createError, data: createData }] = useCreateGuessMutation();
  const [finishGuess, { loading: finishGuessLoading }] = useFinishGuessMutation();
  const client = useApolloClient();

  if (stateLoading || createLoading || !gameId) return <Loading />;

  if (createError) return <Error />;

  console.log(createData);
  console.log(gameId);

  if (guess?.guessEnd || !guess) {
    if (!createData && !guessCreating) {
      // Create a guess if the stored one has 'guessEnd' set or there is no guess saved
      setGuessCreating(true);
      console.log('CREATING A GUESS');
      createGuess({
        variables: {
          player: playerId!,
          lobbyGame: gameId!,
        },
      }).then(response => {
        if (!response.data?.guessCreate?.ok) {
          console.log('UNABLE TO CREATE A GUESS');
          return;
        }
        guessIdVar(response.data?.guessCreate?.guessmodel?.id);
        client.cache.evict({ fieldName: 'currentGuess' });
        client.cache.evict({ fieldName: 'currentLocation' });
        client.cache.gc();
      });
    }
    return <Loading />;
  }

  async function completeGuess() {
    setButtonEnabled(false);
    await finishGuess({
      variables: {
        id: guessId!,
        latitude: guessMarker.lat,
        longitude: guessMarker.lng,
        guessEnd: new Date(),
      },
    });
  }

  console.log(guess);
  console.log(location);

  const lat = location?.latitude || 49.1466684;
  const lng = location?.longitude || 16.8812407;

  if (!forcedReload && !game) {
    deleteFromCache(client, lobby!);
    refetch();
    setForcedReload(true);
  }

  return (
    <Flex direction={'column'} justify={'space-between'} textAlign="center" h={'100vh'} fontSize="xl">
      <Flex
        justify="space-between"
        align="center"
        background={colorScheme}
        p={1}
        position="relative"
        direction="row"
        zIndex={10}
        layerStyle="topBar"
      >
        <Text width="30vw" align="start" paddingLeft={3}>
          {guessId && `Round ${roundNumber ?? '?'}/${game?.game?.rounds ?? '?'}`}
        </Text>
        <Box>
          {guessId && guess && !guess.guessEnd ? (
            // Countdown clock for the remaining guess time
            <Countdown
              onStart={t => {
                if (t.total <= 0) {
                  console.log('COMPLETING');
                  return completeGuess();
                }
              }}
              onComplete={completeGuess}
              renderer={RenderTime}
              date={(game?.game?.timeLimit ?? 0) * 1000 + new Date(guess?.guessStart).getTime()}
            />
          ) : (
            'Unknown'
          )}
        </Box>
        <Box align="end" width="30vw" />
      </Flex>
      <StreetView
        style={{ top: 0, bottom: 0 }}
        onLoad={function () {
          setButtonEnabled(true);
        }}
        startingLocation={[lat, lng]}
      />
      <Flex position="absolute" p={2} zIndex={10} bottom={0} width="100%" justify="center" align="center">
        <Button onClick={completeGuess} disabled={!buttonEnabled} isLoading={finishGuessLoading}>
          {buttonEnabled ? 'Guess' : 'Loading'}
        </Button>
      </Flex>
      <Flex
        p={2}
        zIndex={10}
        background="rgba(0, 0, 0, 0.25)"
        onMouseEnter={() => setMapOpen(true)}
        onMouseLeave={() => setMapOpen(false)}
        justify="flex-end"
        align="flex-end"
        alignSelf="flex-end"
      >
        <HStack spacing={2}>
          <Box as="button" layerStyle="coloredButton">
            <FaAngleDoubleUp size="3rem" />
          </Box>
          <Box as="button" layerStyle="coloredButton">
            <FaMapMarkedAlt size="4rem" />
          </Box>
        </HStack>
        <Popover isOpen={mapOpen} placement="top-end" trigger="hover">
          <PopoverTrigger>
            <Box position="absolute" right={0} bottom={-1} w={0} h={0} />
          </PopoverTrigger>
          <PopoverContent borderWidth={0}>
            <PopoverBody right={1} bottom={0} p={1} position="absolute">
              <ResizableMap
                startHeight={window.innerHeight * 0.4}
                startWidth={window.innerWidth * 0.45}
                sizeStoreName={'gameMapSize'}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MinimapControl position="topright" />
                <AddMarker marker={guessMarker} setMarker={setGuessMarker} />
              </ResizableMap>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
}
