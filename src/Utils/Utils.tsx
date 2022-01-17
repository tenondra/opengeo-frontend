import { CircularProgress, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { createBrowserHistory } from 'history';
import {
  LobbyPlayerModelStateEnum,
  LobbyPlayerModelStateEnumCreate,
  LobbyPlayerModelStateEnumUpdate,
} from '../backend/model';

export const history = createBrowserHistory();

/*
 * Shows a loading wheel with an optional message
 * */
function Loading({ message = 'Loading ...', children = undefined }: { message?: string | undefined; children?: any }) {
  return (
    <VStack className={'vertical-container'}>
      <CircularProgress isIndeterminate />
      {message && <Text>{message}</Text>}
      {children}
    </VStack>
  );
}

/*
 * Shows an error message
 * */
function Error({
  message = 'An unknown error happenned. Please check the console for more details.',
  children = undefined,
}: {
  message?: string | undefined;
  children?: any;
}) {
  return (
    <VStack className={'vertical-container'}>
      <Heading className={'heading'}>Uh oh</Heading>
      <Image src="https://linustechtips.com/uploads/monthly_2018_10/imported-photo-595174.thumb.png.e66a513a7cf85e83a3c98b4aed94f30d.png" />
      <Heading className={'subheading'} size="lg">
        Something went wrong
      </Heading>
      {message && <Text>{message}</Text>}
      {children}
    </VStack>
  );
}

/*
 * Application paths
 * */
const PATHS = {
  StartingPage: '/',
  LobbySelectPage: '/lobby-select',
  LobbyPage: '/lobby',
  GamePage: '/play',
  AfterGamePage: '/round-results',
  FinalResultsPage: '/game-results',
};

const BASENAME = '/app';

/*
 * Helper function with typed result that checks if an object is defined and non-null
 * */
function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

/*
 * Sleep for ms milliseconds
 * */
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function translatePlayerState(
  state?: LobbyPlayerModelStateEnum | LobbyPlayerModelStateEnumCreate | LobbyPlayerModelStateEnumUpdate | null
) {
  switch (state) {
    case LobbyPlayerModelStateEnum.InGame:
      return 'In Game';
    case LobbyPlayerModelStateEnum.AfterGame:
      return 'Finished Playing';
    case LobbyPlayerModelStateEnum.Idle:
      return 'In a Lobby';
    case LobbyPlayerModelStateEnum.Ready:
      return 'Ready to Play';
    case LobbyPlayerModelStateEnum.SearchingLobby:
      return 'Looking For a Lobby';
    case LobbyPlayerModelStateEnum.WaitingNextRound:
      return 'Awaiting Next Round';
    case null:
    case undefined:
      return 'Unknown';
    default:
      return 'What the hell happened here.';
  }
}

export { Loading, Error, PATHS, BASENAME, notEmpty, sleep, translatePlayerState };
