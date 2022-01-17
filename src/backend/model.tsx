import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  CustomDateTime: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};





















export type CurrentGame = {
  __typename?: 'CurrentGame';
  location?: Maybe<Location>;
  lobbyGame?: Maybe<LobbyGame>;
  roundNumber?: Maybe<Scalars['Int']>;
};



export type DeleteJsonWebTokenCookie = {
  __typename?: 'DeleteJSONWebTokenCookie';
  deleted: Scalars['Boolean'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  messages: Array<Scalars['String']>;
};

/** A single result for a location */
export type FinalResult = {
  __typename?: 'FinalResult';
  score?: Maybe<Scalars['Int']>;
  guess?: Maybe<Guess>;
  distance?: Maybe<Scalars['Int']>;
};

/** List of results for a player */
export type FinalResults = {
  __typename?: 'FinalResults';
  lobbyPlayer?: Maybe<LobbyPlayer>;
  totalScore?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<FinalResult>>>;
  locations?: Maybe<Array<Maybe<Location>>>;
};

/** Type definition for one game */
export type Game = {
  __typename?: 'Game';
  /** creator */
  creator?: Maybe<Player>;
  gameLobbies?: Maybe<Array<LobbyGame>>;
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** name */
  name?: Maybe<Scalars['String']>;
  /** time limit */
  timeLimit?: Maybe<Scalars['Int']>;
  rounds?: Maybe<Scalars['Int']>;
};

/** Auto generated InputType for GameModel model */
export type GameModelCreateGenericType = {
  gameLobbies?: Maybe<Array<Scalars['ID']>>;
  locations?: Maybe<Array<Scalars['ID']>>;
  /** time limit */
  timeLimit: Scalars['Int'];
  /** name */
  name?: Maybe<Scalars['String']>;
};

/** Auto generated InputType for GameModel model */
export type GameModelUpdateGenericType = {
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** name */
  name?: Maybe<Scalars['String']>;
  /** time limit */
  timeLimit?: Maybe<Scalars['Int']>;
  locations?: Maybe<Array<Scalars['ID']>>;
  gameLobbies?: Maybe<Array<Scalars['ID']>>;
};

/** SerializerMutation for GameModel model */
export type GameSerializerMutation = {
  __typename?: 'GameSerializerMutation';
  gamemodel?: Maybe<Game>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

/** SerializerMutation for GameModel model */
export type GameUpdateSerializerMutation = {
  __typename?: 'GameUpdateSerializerMutation';
  gamemodel?: Maybe<Game>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};


/** Type definition for one guess */
export type Guess = {
  __typename?: 'Guess';
  /** guess end */
  guessEnd?: Maybe<Scalars['CustomDateTime']>;
  /** guess start */
  guessStart?: Maybe<Scalars['CustomDateTime']>;
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** lobby game */
  lobbyGame?: Maybe<LobbyGame>;
  /** location */
  location?: Maybe<Location>;
  /** longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** player */
  player?: Maybe<LobbyPlayer>;
};

/** SerializerMutation for GuessModel model */
export type GuessCreateSerializerMutation = {
  __typename?: 'GuessCreateSerializerMutation';
  guessmodel?: Maybe<Guess>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

/** Auto generated InputType for GuessModel model */
export type GuessModelCreateGenericType = {
  /** lobby game */
  lobbyGame: Scalars['ID'];
  /** location */
  location: Scalars['ID'];
  /** player */
  player: Scalars['ID'];
  /** guess end */
  guessEnd?: Maybe<Scalars['CustomDateTime']>;
  /** latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** longitude */
  longitude?: Maybe<Scalars['Float']>;
};

/** Auto generated InputType for GuessModel model */
export type GuessModelUpdateGenericType = {
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** player */
  player?: Maybe<Scalars['ID']>;
  /** location */
  location?: Maybe<Scalars['ID']>;
  /** lobby game */
  lobbyGame?: Maybe<Scalars['ID']>;
  /** guess end */
  guessEnd?: Maybe<Scalars['CustomDateTime']>;
};

/** SerializerMutation for GuessModel model */
export type GuessUpdateSerializerMutation = {
  __typename?: 'GuessUpdateSerializerMutation';
  guessmodel?: Maybe<Guess>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

/** Type definition for one lobby */
export type Lobby = {
  __typename?: 'Lobby';
  /** created */
  created?: Maybe<Scalars['CustomDateTime']>;
  id?: Maybe<Scalars['Int']>;
  /** lobby game */
  lobbyGame?: Maybe<LobbyGame>;
  /** LobbyPlayerModel list */
  lobbyPlayers?: Maybe<Array<Maybe<LobbyPlayer>>>;
  /** name */
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Player>;
  /** state */
  state?: Maybe<LobbyModelStateEnum>;
};


/** Type definition for one lobby */
export type LobbyLobbyPlayersArgs = {
  lobby?: Maybe<Scalars['ID']>;
  state?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};

/** Type definition for lobby game relation */
export type LobbyGame = {
  __typename?: 'LobbyGame';
  game?: Maybe<Game>;
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** LobbyModel list */
  lobbies?: Maybe<Array<Maybe<Lobby>>>;
};


/** Type definition for lobby game relation */
export type LobbyGameLobbiesArgs = {
  created_Gt?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

/** Auto generated InputType for LobbyGameModel model */
export type LobbyGameModelCreateGenericType = {
  /** game */
  game: Scalars['ID'];
  guesses?: Maybe<Array<Scalars['ID']>>;
  lobbies?: Maybe<Array<Scalars['ID']>>;
};

/** Auto generated InputType for LobbyGameModel model */
export type LobbyGameModelUpdateGenericType = {
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** game */
  game?: Maybe<Scalars['ID']>;
  guesses?: Maybe<Array<Scalars['ID']>>;
  lobbies?: Maybe<Array<Scalars['ID']>>;
};

/** SerializerMutation for LobbyGameModel model */
export type LobbyGameSerializerMutation = {
  __typename?: 'LobbyGameSerializerMutation';
  lobbygamemodel?: Maybe<LobbyGame>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

/** SerializerMutation for LobbyGameModel model */
export type LobbyGameUpdateSerializerMutation = {
  __typename?: 'LobbyGameUpdateSerializerMutation';
  lobbygamemodel?: Maybe<LobbyGame>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

/** Auto generated InputType for LobbyModel model */
export type LobbyModelCreateGenericType = {
  /** owner */
  owner: Scalars['ID'];
  /** lobby game */
  lobbyGame?: Maybe<Scalars['ID']>;
  lobbyPlayers?: Maybe<Array<Scalars['ID']>>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** state */
  state?: Maybe<LobbyModelStateEnumCreate>;
};

/** An enumeration. */
export enum LobbyModelStateEnum {
  /** Open */
  Open = 'OPEN',
  /** Running */
  Running = 'RUNNING',
  /** Closed */
  Closed = 'CLOSED'
}

/** An enumeration. */
export enum LobbyModelStateEnumCreate {
  /** Open */
  Open = 'OPEN',
  /** Running */
  Running = 'RUNNING',
  /** Closed */
  Closed = 'CLOSED'
}

/** An enumeration. */
export enum LobbyModelStateEnumUpdate {
  /** Open */
  Open = 'OPEN',
  /** Running */
  Running = 'RUNNING',
  /** Closed */
  Closed = 'CLOSED'
}

/** Auto generated InputType for LobbyModel model */
export type LobbyModelUpdateGenericType = {
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** lobby game */
  lobbyGame?: Maybe<Scalars['ID']>;
  /** owner */
  owner?: Maybe<Scalars['ID']>;
  /** state */
  state?: Maybe<LobbyModelStateEnumUpdate>;
  /** name */
  name?: Maybe<Scalars['String']>;
  lobbyPlayers?: Maybe<Array<Scalars['ID']>>;
};

/** Type definition for lobby players relation */
export type LobbyPlayer = {
  __typename?: 'LobbyPlayer';
  guesses?: Maybe<Array<Guess>>;
  /** lobby */
  lobby?: Maybe<Lobby>;
  /** player */
  player?: Maybe<Player>;
  /** state */
  state?: Maybe<LobbyPlayerModelStateEnum>;
  id?: Maybe<Scalars['Int']>;
};

/** Auto generated InputType for LobbyPlayerModel model */
export type LobbyPlayerModelCreateGenericType = {
  guesses?: Maybe<Array<Scalars['ID']>>;
  /** player */
  player: Scalars['ID'];
  /** lobby */
  lobby?: Maybe<Scalars['ID']>;
  /** state */
  state?: Maybe<LobbyPlayerModelStateEnumCreate>;
};

/** An enumeration. */
export enum LobbyPlayerModelStateEnum {
  /** Idle */
  Idle = 'IDLE',
  /** Ready */
  Ready = 'READY',
  /** In Game */
  InGame = 'IN_GAME',
  /** Waiting Next Round */
  WaitingNextRound = 'WAITING_NEXT_ROUND',
  /** After Game */
  AfterGame = 'AFTER_GAME',
  /** Searching Lobby */
  SearchingLobby = 'SEARCHING_LOBBY'
}

/** An enumeration. */
export enum LobbyPlayerModelStateEnumCreate {
  /** Idle */
  Idle = 'IDLE',
  /** Ready */
  Ready = 'READY',
  /** In Game */
  InGame = 'IN_GAME',
  /** Waiting Next Round */
  WaitingNextRound = 'WAITING_NEXT_ROUND',
  /** After Game */
  AfterGame = 'AFTER_GAME',
  /** Searching Lobby */
  SearchingLobby = 'SEARCHING_LOBBY'
}

/** An enumeration. */
export enum LobbyPlayerModelStateEnumUpdate {
  /** Idle */
  Idle = 'IDLE',
  /** Ready */
  Ready = 'READY',
  /** In Game */
  InGame = 'IN_GAME',
  /** Waiting Next Round */
  WaitingNextRound = 'WAITING_NEXT_ROUND',
  /** After Game */
  AfterGame = 'AFTER_GAME',
  /** Searching Lobby */
  SearchingLobby = 'SEARCHING_LOBBY'
}

/** Auto generated InputType for LobbyPlayerModel model */
export type LobbyPlayerModelUpdateGenericType = {
  /** lobby */
  lobby?: Maybe<Scalars['ID']>;
  /** state */
  state?: Maybe<LobbyPlayerModelStateEnumUpdate>;
  /** player */
  player?: Maybe<Scalars['ID']>;
  guesses?: Maybe<Array<Scalars['ID']>>;
};

/** SerializerMutation for LobbyPlayerModel model */
export type LobbyPlayerSerializerMutation = {
  __typename?: 'LobbyPlayerSerializerMutation';
  lobbyplayermodel?: Maybe<LobbyPlayer>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type LobbyPlayerUpdateSubscription = {
  __typename?: 'LobbyPlayerUpdateSubscription';
  state?: Maybe<PlayerState>;
  playerId?: Maybe<Scalars['String']>;
  lobby?: Maybe<Lobby>;
};

/** SerializerMutation for LobbyModel model */
export type LobbySerializerMutation = {
  __typename?: 'LobbySerializerMutation';
  lobbymodel?: Maybe<Lobby>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  lobbyPlayers?: Maybe<LobbyPlayer>;
};

export type LobbyUpdateSubscription = {
  __typename?: 'LobbyUpdateSubscription';
  state?: Maybe<StateChoices>;
  name?: Maybe<Scalars['String']>;
  lobbyPlayers?: Maybe<Array<LobbyPlayer>>;
  lobbyId?: Maybe<Scalars['String']>;
  owner?: Maybe<Player>;
  lobbyGame?: Maybe<LobbyGame>;
};

/** Type definition for one location */
export type Location = {
  __typename?: 'Location';
  /** game */
  game?: Maybe<Game>;
  guesses?: Maybe<Array<Guess>>;
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** longitude */
  longitude?: Maybe<Scalars['Float']>;
};

export type LocationInput = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  game?: Maybe<Scalars['ID']>;
};

/** Auto generated InputType for LocationModel model */
export type LocationModelCreateGenericType = {
  /** game */
  game: Scalars['ID'];
  guesses?: Maybe<Array<Scalars['ID']>>;
  /** latitude */
  latitude: Scalars['Float'];
  /** longitude */
  longitude: Scalars['Float'];
};

/** SerializerMutation for LocationModel model */
export type LocationSerializerMutation = {
  __typename?: 'LocationSerializerMutation';
  locationmodel?: Maybe<Location>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

/** Creation of multiple locations */
export type MultipleLocationSerializerMutation = {
  __typename?: 'MultipleLocationSerializerMutation';
  locations?: Maybe<Array<Maybe<Location>>>;
};

export type Mutations = {
  __typename?: 'Mutations';
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  deleteTokenCookie?: Maybe<DeleteJsonWebTokenCookie>;
  /** Registration of a player */
  registerPlayer?: Maybe<PlayerRegisterMutation>;
  playerUpdate?: Maybe<PlayerSerializerMutation>;
  playerDelete?: Maybe<PlayerSerializerMutation>;
  locationCreate?: Maybe<LocationSerializerMutation>;
  /** Creation of multiple locations */
  batchLocationCreate?: Maybe<MultipleLocationSerializerMutation>;
  guessUpdate?: Maybe<GuessUpdateSerializerMutation>;
  guessCreate?: Maybe<GuessCreateSerializerMutation>;
  gameCreate?: Maybe<GameSerializerMutation>;
  gameUpdate?: Maybe<GameUpdateSerializerMutation>;
  gameDelete?: Maybe<GameSerializerMutation>;
  lobbyGameCreate?: Maybe<LobbyGameSerializerMutation>;
  lobbyGameUpdate?: Maybe<LobbyGameUpdateSerializerMutation>;
  lobbyGameDelete?: Maybe<LobbyGameSerializerMutation>;
  lobbyCreate?: Maybe<LobbySerializerMutation>;
  lobbyDelete?: Maybe<LobbySerializerMutation>;
  lobbyUpdate?: Maybe<LobbySerializerMutation>;
  lobbyPlayerCreate?: Maybe<LobbyPlayerSerializerMutation>;
  lobbyPlayerDelete?: Maybe<LobbyPlayerSerializerMutation>;
  lobbyPlayerUpdate?: Maybe<LobbyPlayerSerializerMutation>;
};


export type MutationsTokenAuthArgs = {
  id: Scalars['String'];
  password: Scalars['String'];
};


export type MutationsVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationsRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationsRegisterPlayerArgs = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationsPlayerUpdateArgs = {
  newPlayermodel: PlayerModelUpdateGenericType;
};


export type MutationsPlayerDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationsLocationCreateArgs = {
  newLocationmodel: LocationModelCreateGenericType;
};


export type MutationsBatchLocationCreateArgs = {
  locations?: Maybe<Array<Maybe<LocationInput>>>;
};


export type MutationsGuessUpdateArgs = {
  newGuessmodel: GuessModelUpdateGenericType;
};


export type MutationsGuessCreateArgs = {
  newGuessmodel: GuessModelCreateGenericType;
};


export type MutationsGameCreateArgs = {
  newGamemodel: GameModelCreateGenericType;
};


export type MutationsGameUpdateArgs = {
  newGamemodel: GameModelUpdateGenericType;
};


export type MutationsGameDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationsLobbyGameCreateArgs = {
  newLobbygamemodel: LobbyGameModelCreateGenericType;
};


export type MutationsLobbyGameUpdateArgs = {
  newLobbygamemodel: LobbyGameModelUpdateGenericType;
};


export type MutationsLobbyGameDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationsLobbyCreateArgs = {
  newLobbymodel: LobbyModelCreateGenericType;
};


export type MutationsLobbyDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationsLobbyUpdateArgs = {
  newLobbymodel: LobbyModelUpdateGenericType;
};


export type MutationsLobbyPlayerCreateArgs = {
  newLobbyplayermodel: LobbyPlayerModelCreateGenericType;
};


export type MutationsLobbyPlayerDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationsLobbyPlayerUpdateArgs = {
  newLobbyplayermodel: LobbyPlayerModelUpdateGenericType;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/** Type definition for one player */
export type Player = {
  __typename?: 'Player';
  createdGames?: Maybe<Array<Game>>;
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** last login */
  lastLogin?: Maybe<Scalars['CustomDateTime']>;
  lobbyPlayer?: Maybe<LobbyPlayer>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** LobbyModel list */
  ownedLobbies?: Maybe<Array<Maybe<Lobby>>>;
};


/** Type definition for one player */
export type PlayerOwnedLobbiesArgs = {
  created_Gt?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

/** Auto generated InputType for PlayerModel model */
export type PlayerModelUpdateGenericType = {
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** name */
  name?: Maybe<Scalars['String']>;
};

/** Registration of a player */
export type PlayerRegisterMutation = {
  __typename?: 'PlayerRegisterMutation';
  player?: Maybe<PlayerRegisterType>;
  ok?: Maybe<Scalars['Boolean']>;
};

/** Player registration type */
export type PlayerRegisterType = {
  __typename?: 'PlayerRegisterType';
  createdGames?: Maybe<Array<Game>>;
  /** Django object unique identification field */
  id: Scalars['ID'];
  /** last login */
  lastLogin?: Maybe<Scalars['CustomDateTime']>;
  lobbyPlayer?: Maybe<LobbyPlayer>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** LobbyModel list */
  ownedLobbies?: Maybe<Array<Maybe<Lobby>>>;
  /** password */
  password?: Maybe<Scalars['String']>;
};


/** Player registration type */
export type PlayerRegisterTypeOwnedLobbiesArgs = {
  created_Gt?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

/** SerializerMutation for PlayerModel model */
export type PlayerSerializerMutation = {
  __typename?: 'PlayerSerializerMutation';
  playermodel?: Maybe<Player>;
  /** Boolean field that return mutation result request. */
  ok?: Maybe<Scalars['Boolean']>;
  /** Errors list for the field */
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

/** An enumeration. */
export enum PlayerState {
  Idle = 'IDLE',
  Ready = 'READY',
  InGame = 'IN_GAME',
  WaitingNextRound = 'WAITING_NEXT_ROUND',
  AfterGame = 'AFTER_GAME',
  SearchingLobby = 'SEARCHING_LOBBY'
}

export type Query = {
  __typename?: 'Query';
  currentGuess?: Maybe<Guess>;
  currentLocation?: Maybe<CurrentGame>;
  finalResults?: Maybe<Array<Maybe<FinalResults>>>;
  gameId?: Maybe<Scalars['ID']>;
  guessId?: Maybe<Scalars['ID']>;
  lobby?: Maybe<Lobby>;
  lobbyGame?: Maybe<LobbyGame>;
  lobbyId?: Maybe<Scalars['ID']>;
  /** LobbyModel list */
  lobbyList?: Maybe<Array<Maybe<Lobby>>>;
  lobbyPlayer?: Maybe<LobbyPlayer>;
  locationId?: Maybe<Scalars['ID']>;
  player?: Maybe<Player>;
  playerId?: Maybe<Scalars['ID']>;
  randomLocation?: Maybe<Array<Maybe<RandomLocation>>>;
  results?: Maybe<Results>;
};


export type QueryCurrentGuessArgs = {
  playerId: Scalars['ID'];
  locationId: Scalars['ID'];
};


export type QueryCurrentLocationArgs = {
  lobbyId: Scalars['ID'];
  playerId: Scalars['ID'];
};


export type QueryFinalResultsArgs = {
  lobbyId: Scalars['ID'];
};


export type QueryLobbyArgs = {
  id: Scalars['ID'];
};


export type QueryLobbyGameArgs = {
  id: Scalars['ID'];
};


export type QueryLobbyListArgs = {
  created_Gt?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  ordering?: Maybe<Scalars['String']>;
};


export type QueryLobbyPlayerArgs = {
  id: Scalars['ID'];
};


export type QueryPlayerArgs = {
  id: Scalars['ID'];
};


export type QueryRandomLocationArgs = {
  count?: Maybe<Scalars['Int']>;
  minDensity?: Maybe<Scalars['Int']>;
  maxDensity?: Maybe<Scalars['Int']>;
};


export type QueryResultsArgs = {
  lobbyGameId: Scalars['ID'];
  locationId: Scalars['ID'];
};

export type RandomLocation = {
  __typename?: 'RandomLocation';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  populationDensity?: Maybe<Scalars['Int']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/** A single result for a player */
export type Result = {
  __typename?: 'Result';
  lobbyPlayer?: Maybe<LobbyPlayer>;
  score?: Maybe<Scalars['Int']>;
  totalScore?: Maybe<Scalars['Int']>;
  guess?: Maybe<Guess>;
  distance?: Maybe<Scalars['Int']>;
};

/** List of results for a location */
export type Results = {
  __typename?: 'Results';
  results?: Maybe<Array<Maybe<Result>>>;
  location?: Maybe<Location>;
};

/** An enumeration. */
export enum StateChoices {
  Open = 'OPEN',
  Running = 'RUNNING',
  Closed = 'CLOSED'
}

/** Definition for all subscriptions */
export type Subscription = {
  __typename?: 'Subscription';
  lobbyUpdate?: Maybe<LobbyUpdateSubscription>;
  lobbyPlayerUpdate?: Maybe<LobbyPlayerUpdateSubscription>;
};


/** Definition for all subscriptions */
export type SubscriptionLobbyUpdateArgs = {
  lobbyId?: Maybe<Scalars['String']>;
};


/** Definition for all subscriptions */
export type SubscriptionLobbyPlayerUpdateArgs = {
  playerId?: Maybe<Scalars['String']>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};


      export type PossibleTypesResultData = {
  "possibleTypes": {}
};
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutations' }
  & { refreshToken?: Maybe<(
    { __typename?: 'Refresh' }
    & Pick<Refresh, 'token' | 'refreshExpiresIn' | 'payload'>
  )> }
);

export type LoginMutationVariables = Exact<{
  playerId: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutations' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'refreshExpiresIn'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutations' }
  & { registerPlayer?: Maybe<(
    { __typename?: 'PlayerRegisterMutation' }
    & Pick<PlayerRegisterMutation, 'ok'>
    & { player?: Maybe<(
      { __typename?: 'PlayerRegisterType' }
      & Pick<PlayerRegisterType, 'id' | 'name'>
    )> }
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutations' }
  & { deleteTokenCookie?: Maybe<(
    { __typename?: 'DeleteJSONWebTokenCookie' }
    & { ok: DeleteJsonWebTokenCookie['deleted'] }
  )> }
);

export type LobbyCreateMutationVariables = Exact<{
  name: Scalars['String'];
  owner: Scalars['ID'];
}>;


export type LobbyCreateMutation = (
  { __typename?: 'Mutations' }
  & { lobbyCreate?: Maybe<(
    { __typename?: 'LobbySerializerMutation' }
    & Pick<LobbySerializerMutation, 'ok'>
    & { lobbymodel?: Maybe<(
      { __typename?: 'Lobby' }
      & Pick<Lobby, 'id' | 'name'>
      & { owner?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id'>
      )> }
    )> }
  )> }
);

export type LobbyGameCreateMutationVariables = Exact<{
  lobbyId: Scalars['ID'];
  gameId: Scalars['ID'];
}>;


export type LobbyGameCreateMutation = (
  { __typename?: 'Mutations' }
  & { lobbyGameCreate?: Maybe<(
    { __typename?: 'LobbyGameSerializerMutation' }
    & Pick<LobbyGameSerializerMutation, 'ok'>
    & { lobbygamemodel?: Maybe<(
      { __typename?: 'LobbyGame' }
      & Pick<LobbyGame, 'id'>
      & { lobbies?: Maybe<Array<Maybe<(
        { __typename?: 'Lobby' }
        & Pick<Lobby, 'id'>
      )>>>, game?: Maybe<(
        { __typename?: 'Game' }
        & Pick<Game, 'id'>
      )> }
    )> }
  )> }
);

export type LobbyPlayerCreateMutationVariables = Exact<{
  playerId: Scalars['ID'];
  state?: Maybe<LobbyPlayerModelStateEnumCreate>;
  lobbyId?: Maybe<Scalars['ID']>;
}>;


export type LobbyPlayerCreateMutation = (
  { __typename?: 'Mutations' }
  & { lobbyPlayerCreate?: Maybe<(
    { __typename?: 'LobbyPlayerSerializerMutation' }
    & Pick<LobbyPlayerSerializerMutation, 'ok'>
    & { lobbyplayermodel?: Maybe<(
      { __typename?: 'LobbyPlayer' }
      & Pick<LobbyPlayer, 'id' | 'state'>
      & { lobby?: Maybe<(
        { __typename?: 'Lobby' }
        & Pick<Lobby, 'id'>
      )>, player?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id'>
      )> }
    )> }
  )> }
);

export type GameCreateMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  timeLimit: Scalars['Int'];
}>;


export type GameCreateMutation = (
  { __typename?: 'Mutations' }
  & { gameCreate?: Maybe<(
    { __typename?: 'GameSerializerMutation' }
    & Pick<GameSerializerMutation, 'ok'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'ErrorType' }
      & Pick<ErrorType, 'field' | 'messages'>
    )>>>, gamemodel?: Maybe<(
      { __typename?: 'Game' }
      & Pick<Game, 'id'>
    )> }
  )> }
);

export type ChangePlayerStateMutationVariables = Exact<{
  id: Scalars['ID'];
  state?: Maybe<LobbyPlayerModelStateEnumUpdate>;
}>;


export type ChangePlayerStateMutation = (
  { __typename?: 'Mutations' }
  & { lobbyPlayerUpdate?: Maybe<(
    { __typename?: 'LobbyPlayerSerializerMutation' }
    & Pick<LobbyPlayerSerializerMutation, 'ok'>
    & { lobbyplayermodel?: Maybe<(
      { __typename?: 'LobbyPlayer' }
      & Pick<LobbyPlayer, 'id' | 'state'>
      & { player?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id'>
      )> }
    )> }
  )> }
);

export type LobbyPlayerLeaveLobbyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LobbyPlayerLeaveLobbyMutation = (
  { __typename?: 'Mutations' }
  & { lobbyPlayerUpdate?: Maybe<(
    { __typename?: 'LobbyPlayerSerializerMutation' }
    & Pick<LobbyPlayerSerializerMutation, 'ok'>
    & { lobbyplayermodel?: Maybe<(
      { __typename?: 'LobbyPlayer' }
      & Pick<LobbyPlayer, 'id' | 'state'>
      & { lobby?: Maybe<(
        { __typename?: 'Lobby' }
        & Pick<Lobby, 'id'>
      )>, player?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id'>
      )> }
    )> }
  )> }
);

export type LobbyPlayerJoinLobbyMutationVariables = Exact<{
  id: Scalars['ID'];
  lobbyId: Scalars['ID'];
}>;


export type LobbyPlayerJoinLobbyMutation = (
  { __typename?: 'Mutations' }
  & { lobbyPlayerUpdate?: Maybe<(
    { __typename?: 'LobbyPlayerSerializerMutation' }
    & { lobbyplayermodel?: Maybe<(
      { __typename?: 'LobbyPlayer' }
      & Pick<LobbyPlayer, 'id' | 'state'>
      & { player?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id'>
      )> }
    )> }
  )> }
);

export type ChangeLobbyStateMutationVariables = Exact<{
  id: Scalars['ID'];
  state?: Maybe<LobbyModelStateEnumUpdate>;
}>;


export type ChangeLobbyStateMutation = (
  { __typename?: 'Mutations' }
  & { lobbyUpdate?: Maybe<(
    { __typename?: 'LobbySerializerMutation' }
    & Pick<LobbySerializerMutation, 'ok'>
    & { lobbymodel?: Maybe<(
      { __typename?: 'Lobby' }
      & Pick<Lobby, 'id' | 'state'>
      & { owner?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id'>
      )>, lobbyGame?: Maybe<(
        { __typename?: 'LobbyGame' }
        & Pick<LobbyGame, 'id'>
        & { game?: Maybe<(
          { __typename?: 'Game' }
          & Pick<Game, 'id'>
        )> }
      )> }
    )> }
  )> }
);

export type BulkLocationMutationVariables = Exact<{
  locations?: Maybe<Array<Maybe<LocationInput>> | Maybe<LocationInput>>;
}>;


export type BulkLocationMutation = (
  { __typename?: 'Mutations' }
  & { batchLocationCreate?: Maybe<(
    { __typename?: 'MultipleLocationSerializerMutation' }
    & { locations?: Maybe<Array<Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'id'>
    )>>> }
  )> }
);

export type CreateGuessMutationVariables = Exact<{
  player: Scalars['ID'];
  lobbyGame: Scalars['ID'];
}>;


export type CreateGuessMutation = (
  { __typename?: 'Mutations' }
  & { guessCreate?: Maybe<(
    { __typename?: 'GuessCreateSerializerMutation' }
    & Pick<GuessCreateSerializerMutation, 'ok'>
    & { guessmodel?: Maybe<(
      { __typename?: 'Guess' }
      & Pick<Guess, 'id' | 'guessStart'>
    )> }
  )> }
);

export type FinishGuessMutationVariables = Exact<{
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  guessEnd: Scalars['CustomDateTime'];
}>;


export type FinishGuessMutation = (
  { __typename?: 'Mutations' }
  & { guessUpdate?: Maybe<(
    { __typename?: 'GuessUpdateSerializerMutation' }
    & Pick<GuessUpdateSerializerMutation, 'ok'>
    & { guessmodel?: Maybe<(
      { __typename?: 'Guess' }
      & Pick<Guess, 'id' | 'guessStart' | 'guessEnd'>
    )> }
  )> }
);

export type CurrentGuessQueryVariables = Exact<{
  playerId: Scalars['ID'];
  locationId: Scalars['ID'];
}>;


export type CurrentGuessQuery = (
  { __typename?: 'Query' }
  & { currentGuess?: Maybe<(
    { __typename?: 'Guess' }
    & Pick<Guess, 'guessEnd' | 'guessStart' | 'id'>
  )> }
);

export type PlayerInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PlayerInfoQuery = (
  { __typename?: 'Query' }
  & { player?: Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'name' | 'id'>
  )> }
);

export type RandomLocationsQueryVariables = Exact<{
  count?: Maybe<Scalars['Int']>;
  minDensity?: Maybe<Scalars['Int']>;
  maxDensity?: Maybe<Scalars['Int']>;
}>;


export type RandomLocationsQuery = (
  { __typename?: 'Query' }
  & { randomLocation?: Maybe<Array<Maybe<(
    { __typename?: 'RandomLocation' }
    & Pick<RandomLocation, 'latitude' | 'longitude' | 'populationDensity'>
  )>>> }
);

export type LobbyPlayerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LobbyPlayerQuery = (
  { __typename?: 'Query' }
  & { lobbyPlayer?: Maybe<(
    { __typename?: 'LobbyPlayer' }
    & Pick<LobbyPlayer, 'id' | 'state'>
    & { player?: Maybe<(
      { __typename?: 'Player' }
      & Pick<Player, 'id'>
    )>, lobby?: Maybe<(
      { __typename?: 'Lobby' }
      & Pick<Lobby, 'id'>
    )> }
  )> }
);

export type LobbyDetailQueryVariables = Exact<{
  lobbyId: Scalars['ID'];
}>;


export type LobbyDetailQuery = (
  { __typename?: 'Query' }
  & { lobby?: Maybe<(
    { __typename?: 'Lobby' }
    & Pick<Lobby, 'id' | 'name' | 'state'>
    & { lobbyGame?: Maybe<(
      { __typename?: 'LobbyGame' }
      & Pick<LobbyGame, 'id'>
    )>, lobbyPlayers?: Maybe<Array<Maybe<(
      { __typename?: 'LobbyPlayer' }
      & Pick<LobbyPlayer, 'state'>
      & { player?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id' | 'name'>
      )> }
    )>>>, owner?: Maybe<(
      { __typename?: 'Player' }
      & Pick<Player, 'name' | 'id'>
    )> }
  )> }
);

export type OpenLobbyListQueryVariables = Exact<{
  from: Scalars['DateTime'];
}>;


export type OpenLobbyListQuery = (
  { __typename?: 'Query' }
  & { lobbyList?: Maybe<Array<Maybe<(
    { __typename?: 'Lobby' }
    & Pick<Lobby, 'id' | 'name' | 'state'>
    & { owner?: Maybe<(
      { __typename?: 'Player' }
      & Pick<Player, 'name' | 'id'>
    )>, lobbyPlayers?: Maybe<Array<Maybe<(
      { __typename?: 'LobbyPlayer' }
      & { player?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id'>
      )> }
    )>>> }
  )>>> }
);

export type ResultsQueryVariables = Exact<{
  locationId: Scalars['ID'];
  lobbyGameId: Scalars['ID'];
}>;


export type ResultsQuery = (
  { __typename?: 'Query' }
  & { results?: Maybe<(
    { __typename?: 'Results' }
    & { location?: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'latitude' | 'longitude'>
    )>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Result' }
      & Pick<Result, 'score' | 'totalScore' | 'distance'>
      & { guess?: Maybe<(
        { __typename?: 'Guess' }
        & Pick<Guess, 'id' | 'latitude' | 'longitude'>
      )>, lobbyPlayer?: Maybe<(
        { __typename?: 'LobbyPlayer' }
        & Pick<LobbyPlayer, 'id' | 'state'>
        & { player?: Maybe<(
          { __typename?: 'Player' }
          & Pick<Player, 'id' | 'name'>
        )> }
      )> }
    )>>> }
  )> }
);

export type FinalResultsQueryVariables = Exact<{
  lobbyId: Scalars['ID'];
}>;


export type FinalResultsQuery = (
  { __typename?: 'Query' }
  & { finalResults?: Maybe<Array<Maybe<(
    { __typename?: 'FinalResults' }
    & Pick<FinalResults, 'totalScore'>
    & { lobbyPlayer?: Maybe<(
      { __typename?: 'LobbyPlayer' }
      & Pick<LobbyPlayer, 'id' | 'state'>
      & { player?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id' | 'name'>
      )> }
    )>, locations?: Maybe<Array<Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'latitude' | 'longitude'>
    )>>>, results?: Maybe<Array<Maybe<(
      { __typename?: 'FinalResult' }
      & Pick<FinalResult, 'score' | 'distance'>
      & { guess?: Maybe<(
        { __typename?: 'Guess' }
        & Pick<Guess, 'id' | 'latitude' | 'longitude'>
      )> }
    )>>> }
  )>>> }
);

export type LobbyStateQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LobbyStateQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'lobbyId'>
  & { lobbyState?: Maybe<(
    { __typename?: 'Lobby' }
    & Pick<Lobby, 'id' | 'name' | 'state'>
    & { lobbyGame?: Maybe<(
      { __typename?: 'LobbyGame' }
      & Pick<LobbyGame, 'id'>
      & { game?: Maybe<(
        { __typename?: 'Game' }
        & Pick<Game, 'id'>
      )> }
    )>, lobbyPlayers?: Maybe<Array<Maybe<(
      { __typename?: 'LobbyPlayer' }
      & Pick<LobbyPlayer, 'id' | 'state'>
      & { player?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id' | 'name'>
      )> }
    )>>>, owner?: Maybe<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name'>
    )> }
  )> }
);

export type LobbyPlayerStateQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LobbyPlayerStateQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'playerId'>
  & { lobbyPlayerState?: Maybe<(
    { __typename?: 'LobbyPlayer' }
    & Pick<LobbyPlayer, 'id' | 'state'>
    & { lobby?: Maybe<(
      { __typename?: 'Lobby' }
      & Pick<Lobby, 'id'>
    )> }
  )> }
);

export type PlayerStateQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PlayerStateQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'playerId'>
  & { playerState?: Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'name' | 'lastLogin'>
  )> }
);

export type GameStateQueryVariables = Exact<{
  lobbyGameId: Scalars['ID'];
}>;


export type GameStateQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'gameId'>
  & { gameState?: Maybe<(
    { __typename?: 'LobbyGame' }
    & Pick<LobbyGame, 'id'>
    & { game?: Maybe<(
      { __typename?: 'Game' }
      & Pick<Game, 'id' | 'name' | 'timeLimit' | 'rounds'>
    )> }
  )> }
);

export type LocationStateQueryVariables = Exact<{
  lobbyId: Scalars['ID'];
  playerId: Scalars['ID'];
}>;


export type LocationStateQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'lobbyId' | 'playerId'>
  & { locationState?: Maybe<(
    { __typename?: 'CurrentGame' }
    & Pick<CurrentGame, 'roundNumber'>
    & { location?: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'latitude' | 'longitude'>
      & { game?: Maybe<(
        { __typename?: 'Game' }
        & Pick<Game, 'id'>
      )> }
    )>, lobbyGame?: Maybe<(
      { __typename?: 'LobbyGame' }
      & Pick<LobbyGame, 'id'>
    )> }
  )> }
);

export type GuessStateQueryVariables = Exact<{
  playerId: Scalars['ID'];
  locationId: Scalars['ID'];
}>;


export type GuessStateQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'playerId' | 'locationId'>
  & { guessState?: Maybe<(
    { __typename?: 'Guess' }
    & Pick<Guess, 'guessEnd' | 'guessStart' | 'id'>
  )> }
);

export type LobbyStateSyncSubscriptionVariables = Exact<{
  lobbyId: Scalars['String'];
}>;


export type LobbyStateSyncSubscription = (
  { __typename?: 'Subscription' }
  & { lobby?: Maybe<(
    { __typename?: 'LobbyUpdateSubscription' }
    & Pick<LobbyUpdateSubscription, 'name' | 'state'>
    & { id: LobbyUpdateSubscription['lobbyId'] }
    & { lobbyGame?: Maybe<(
      { __typename?: 'LobbyGame' }
      & Pick<LobbyGame, 'id'>
      & { game?: Maybe<(
        { __typename?: 'Game' }
        & Pick<Game, 'id'>
      )> }
    )>, lobbyPlayers?: Maybe<Array<(
      { __typename?: 'LobbyPlayer' }
      & Pick<LobbyPlayer, 'id' | 'state'>
      & { player?: Maybe<(
        { __typename?: 'Player' }
        & Pick<Player, 'id' | 'name'>
      )> }
    )>>, owner?: Maybe<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name'>
    )> }
  )> }
);

export type LobbyPlayerStateSyncSubscriptionVariables = Exact<{
  playerId: Scalars['String'];
}>;


export type LobbyPlayerStateSyncSubscription = (
  { __typename?: 'Subscription' }
  & { lobbyPlayer?: Maybe<(
    { __typename?: 'LobbyPlayerUpdateSubscription' }
    & Pick<LobbyPlayerUpdateSubscription, 'state'>
    & { id: LobbyPlayerUpdateSubscription['playerId'] }
    & { lobby?: Maybe<(
      { __typename?: 'Lobby' }
      & Pick<Lobby, 'id'>
    )> }
  )> }
);


export const RefreshTokenDocument = gql`
    mutation RefreshToken($token: String!) {
  refreshToken(token: $token) {
    token
    refreshExpiresIn
    payload
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const LoginDocument = gql`
    mutation Login($playerId: String!, $password: String!) {
  tokenAuth(id: $playerId, password: $password) {
    token
    refreshExpiresIn
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($name: String!, $password: String!) {
  registerPlayer(name: $name, password: $password) {
    ok
    player {
      id
      name
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  deleteTokenCookie {
    ok: deleted
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const LobbyCreateDocument = gql`
    mutation LobbyCreate($name: String!, $owner: ID!) {
  lobbyCreate(newLobbymodel: {name: $name, lobbyPlayers: [$owner], owner: $owner}) {
    ok
    lobbymodel {
      id
      owner {
        id
      }
      name
    }
  }
}
    `;
export type LobbyCreateMutationFn = Apollo.MutationFunction<LobbyCreateMutation, LobbyCreateMutationVariables>;

/**
 * __useLobbyCreateMutation__
 *
 * To run a mutation, you first call `useLobbyCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLobbyCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lobbyCreateMutation, { data, loading, error }] = useLobbyCreateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useLobbyCreateMutation(baseOptions?: Apollo.MutationHookOptions<LobbyCreateMutation, LobbyCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LobbyCreateMutation, LobbyCreateMutationVariables>(LobbyCreateDocument, options);
      }
export type LobbyCreateMutationHookResult = ReturnType<typeof useLobbyCreateMutation>;
export type LobbyCreateMutationResult = Apollo.MutationResult<LobbyCreateMutation>;
export type LobbyCreateMutationOptions = Apollo.BaseMutationOptions<LobbyCreateMutation, LobbyCreateMutationVariables>;
export const LobbyGameCreateDocument = gql`
    mutation LobbyGameCreate($lobbyId: ID!, $gameId: ID!) {
  lobbyGameCreate(newLobbygamemodel: {lobbies: [$lobbyId], game: $gameId}) {
    ok
    lobbygamemodel {
      id
      lobbies {
        id
      }
      game {
        id
      }
    }
  }
}
    `;
export type LobbyGameCreateMutationFn = Apollo.MutationFunction<LobbyGameCreateMutation, LobbyGameCreateMutationVariables>;

/**
 * __useLobbyGameCreateMutation__
 *
 * To run a mutation, you first call `useLobbyGameCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLobbyGameCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lobbyGameCreateMutation, { data, loading, error }] = useLobbyGameCreateMutation({
 *   variables: {
 *      lobbyId: // value for 'lobbyId'
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useLobbyGameCreateMutation(baseOptions?: Apollo.MutationHookOptions<LobbyGameCreateMutation, LobbyGameCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LobbyGameCreateMutation, LobbyGameCreateMutationVariables>(LobbyGameCreateDocument, options);
      }
export type LobbyGameCreateMutationHookResult = ReturnType<typeof useLobbyGameCreateMutation>;
export type LobbyGameCreateMutationResult = Apollo.MutationResult<LobbyGameCreateMutation>;
export type LobbyGameCreateMutationOptions = Apollo.BaseMutationOptions<LobbyGameCreateMutation, LobbyGameCreateMutationVariables>;
export const LobbyPlayerCreateDocument = gql`
    mutation LobbyPlayerCreate($playerId: ID!, $state: LobbyPlayerModelStateEnumCreate, $lobbyId: ID) {
  lobbyPlayerCreate(
    newLobbyplayermodel: {player: $playerId, state: $state, lobby: $lobbyId}
  ) {
    ok
    lobbyplayermodel {
      id
      lobby {
        id
      }
      player {
        id
      }
      state
    }
  }
}
    `;
export type LobbyPlayerCreateMutationFn = Apollo.MutationFunction<LobbyPlayerCreateMutation, LobbyPlayerCreateMutationVariables>;

/**
 * __useLobbyPlayerCreateMutation__
 *
 * To run a mutation, you first call `useLobbyPlayerCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLobbyPlayerCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lobbyPlayerCreateMutation, { data, loading, error }] = useLobbyPlayerCreateMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      state: // value for 'state'
 *      lobbyId: // value for 'lobbyId'
 *   },
 * });
 */
export function useLobbyPlayerCreateMutation(baseOptions?: Apollo.MutationHookOptions<LobbyPlayerCreateMutation, LobbyPlayerCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LobbyPlayerCreateMutation, LobbyPlayerCreateMutationVariables>(LobbyPlayerCreateDocument, options);
      }
export type LobbyPlayerCreateMutationHookResult = ReturnType<typeof useLobbyPlayerCreateMutation>;
export type LobbyPlayerCreateMutationResult = Apollo.MutationResult<LobbyPlayerCreateMutation>;
export type LobbyPlayerCreateMutationOptions = Apollo.BaseMutationOptions<LobbyPlayerCreateMutation, LobbyPlayerCreateMutationVariables>;
export const GameCreateDocument = gql`
    mutation GameCreate($name: String, $timeLimit: Int!) {
  gameCreate(newGamemodel: {name: $name, timeLimit: $timeLimit}) {
    errors {
      field
      messages
    }
    ok
    gamemodel {
      id
    }
  }
}
    `;
export type GameCreateMutationFn = Apollo.MutationFunction<GameCreateMutation, GameCreateMutationVariables>;

/**
 * __useGameCreateMutation__
 *
 * To run a mutation, you first call `useGameCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGameCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [gameCreateMutation, { data, loading, error }] = useGameCreateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      timeLimit: // value for 'timeLimit'
 *   },
 * });
 */
export function useGameCreateMutation(baseOptions?: Apollo.MutationHookOptions<GameCreateMutation, GameCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GameCreateMutation, GameCreateMutationVariables>(GameCreateDocument, options);
      }
export type GameCreateMutationHookResult = ReturnType<typeof useGameCreateMutation>;
export type GameCreateMutationResult = Apollo.MutationResult<GameCreateMutation>;
export type GameCreateMutationOptions = Apollo.BaseMutationOptions<GameCreateMutation, GameCreateMutationVariables>;
export const ChangePlayerStateDocument = gql`
    mutation ChangePlayerState($id: ID!, $state: LobbyPlayerModelStateEnumUpdate) {
  lobbyPlayerUpdate(newLobbyplayermodel: {player: $id, state: $state}) {
    ok
    lobbyplayermodel {
      id
      state
      player {
        id
      }
    }
  }
}
    `;
export type ChangePlayerStateMutationFn = Apollo.MutationFunction<ChangePlayerStateMutation, ChangePlayerStateMutationVariables>;

/**
 * __useChangePlayerStateMutation__
 *
 * To run a mutation, you first call `useChangePlayerStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePlayerStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePlayerStateMutation, { data, loading, error }] = useChangePlayerStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useChangePlayerStateMutation(baseOptions?: Apollo.MutationHookOptions<ChangePlayerStateMutation, ChangePlayerStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePlayerStateMutation, ChangePlayerStateMutationVariables>(ChangePlayerStateDocument, options);
      }
export type ChangePlayerStateMutationHookResult = ReturnType<typeof useChangePlayerStateMutation>;
export type ChangePlayerStateMutationResult = Apollo.MutationResult<ChangePlayerStateMutation>;
export type ChangePlayerStateMutationOptions = Apollo.BaseMutationOptions<ChangePlayerStateMutation, ChangePlayerStateMutationVariables>;
export const LobbyPlayerLeaveLobbyDocument = gql`
    mutation LobbyPlayerLeaveLobby($id: ID!) {
  lobbyPlayerUpdate(
    newLobbyplayermodel: {player: $id, state: SEARCHING_LOBBY, lobby: ""}
  ) {
    ok
    lobbyplayermodel {
      id
      state
      lobby {
        id
      }
      player {
        id
      }
    }
  }
}
    `;
export type LobbyPlayerLeaveLobbyMutationFn = Apollo.MutationFunction<LobbyPlayerLeaveLobbyMutation, LobbyPlayerLeaveLobbyMutationVariables>;

/**
 * __useLobbyPlayerLeaveLobbyMutation__
 *
 * To run a mutation, you first call `useLobbyPlayerLeaveLobbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLobbyPlayerLeaveLobbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lobbyPlayerLeaveLobbyMutation, { data, loading, error }] = useLobbyPlayerLeaveLobbyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLobbyPlayerLeaveLobbyMutation(baseOptions?: Apollo.MutationHookOptions<LobbyPlayerLeaveLobbyMutation, LobbyPlayerLeaveLobbyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LobbyPlayerLeaveLobbyMutation, LobbyPlayerLeaveLobbyMutationVariables>(LobbyPlayerLeaveLobbyDocument, options);
      }
export type LobbyPlayerLeaveLobbyMutationHookResult = ReturnType<typeof useLobbyPlayerLeaveLobbyMutation>;
export type LobbyPlayerLeaveLobbyMutationResult = Apollo.MutationResult<LobbyPlayerLeaveLobbyMutation>;
export type LobbyPlayerLeaveLobbyMutationOptions = Apollo.BaseMutationOptions<LobbyPlayerLeaveLobbyMutation, LobbyPlayerLeaveLobbyMutationVariables>;
export const LobbyPlayerJoinLobbyDocument = gql`
    mutation LobbyPlayerJoinLobby($id: ID!, $lobbyId: ID!) {
  lobbyPlayerUpdate(
    newLobbyplayermodel: {player: $id, lobby: $lobbyId, state: IDLE}
  ) {
    lobbyplayermodel {
      id
      player {
        id
      }
      state
    }
  }
}
    `;
export type LobbyPlayerJoinLobbyMutationFn = Apollo.MutationFunction<LobbyPlayerJoinLobbyMutation, LobbyPlayerJoinLobbyMutationVariables>;

/**
 * __useLobbyPlayerJoinLobbyMutation__
 *
 * To run a mutation, you first call `useLobbyPlayerJoinLobbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLobbyPlayerJoinLobbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lobbyPlayerJoinLobbyMutation, { data, loading, error }] = useLobbyPlayerJoinLobbyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      lobbyId: // value for 'lobbyId'
 *   },
 * });
 */
export function useLobbyPlayerJoinLobbyMutation(baseOptions?: Apollo.MutationHookOptions<LobbyPlayerJoinLobbyMutation, LobbyPlayerJoinLobbyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LobbyPlayerJoinLobbyMutation, LobbyPlayerJoinLobbyMutationVariables>(LobbyPlayerJoinLobbyDocument, options);
      }
export type LobbyPlayerJoinLobbyMutationHookResult = ReturnType<typeof useLobbyPlayerJoinLobbyMutation>;
export type LobbyPlayerJoinLobbyMutationResult = Apollo.MutationResult<LobbyPlayerJoinLobbyMutation>;
export type LobbyPlayerJoinLobbyMutationOptions = Apollo.BaseMutationOptions<LobbyPlayerJoinLobbyMutation, LobbyPlayerJoinLobbyMutationVariables>;
export const ChangeLobbyStateDocument = gql`
    mutation ChangeLobbyState($id: ID!, $state: LobbyModelStateEnumUpdate) {
  lobbyUpdate(newLobbymodel: {id: $id, state: $state}) {
    ok
    lobbymodel {
      id
      state
      owner {
        id
      }
      lobbyGame {
        id
        game {
          id
        }
      }
    }
  }
}
    `;
export type ChangeLobbyStateMutationFn = Apollo.MutationFunction<ChangeLobbyStateMutation, ChangeLobbyStateMutationVariables>;

/**
 * __useChangeLobbyStateMutation__
 *
 * To run a mutation, you first call `useChangeLobbyStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeLobbyStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeLobbyStateMutation, { data, loading, error }] = useChangeLobbyStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useChangeLobbyStateMutation(baseOptions?: Apollo.MutationHookOptions<ChangeLobbyStateMutation, ChangeLobbyStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeLobbyStateMutation, ChangeLobbyStateMutationVariables>(ChangeLobbyStateDocument, options);
      }
export type ChangeLobbyStateMutationHookResult = ReturnType<typeof useChangeLobbyStateMutation>;
export type ChangeLobbyStateMutationResult = Apollo.MutationResult<ChangeLobbyStateMutation>;
export type ChangeLobbyStateMutationOptions = Apollo.BaseMutationOptions<ChangeLobbyStateMutation, ChangeLobbyStateMutationVariables>;
export const BulkLocationDocument = gql`
    mutation BulkLocation($locations: [LocationInput]) {
  batchLocationCreate(locations: $locations) {
    locations {
      id
    }
  }
}
    `;
export type BulkLocationMutationFn = Apollo.MutationFunction<BulkLocationMutation, BulkLocationMutationVariables>;

/**
 * __useBulkLocationMutation__
 *
 * To run a mutation, you first call `useBulkLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkLocationMutation, { data, loading, error }] = useBulkLocationMutation({
 *   variables: {
 *      locations: // value for 'locations'
 *   },
 * });
 */
export function useBulkLocationMutation(baseOptions?: Apollo.MutationHookOptions<BulkLocationMutation, BulkLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkLocationMutation, BulkLocationMutationVariables>(BulkLocationDocument, options);
      }
export type BulkLocationMutationHookResult = ReturnType<typeof useBulkLocationMutation>;
export type BulkLocationMutationResult = Apollo.MutationResult<BulkLocationMutation>;
export type BulkLocationMutationOptions = Apollo.BaseMutationOptions<BulkLocationMutation, BulkLocationMutationVariables>;
export const CreateGuessDocument = gql`
    mutation CreateGuess($player: ID!, $lobbyGame: ID!) {
  guessCreate(
    newGuessmodel: {player: $player, location: "", lobbyGame: $lobbyGame}
  ) {
    ok
    guessmodel {
      id
      guessStart
    }
  }
}
    `;
export type CreateGuessMutationFn = Apollo.MutationFunction<CreateGuessMutation, CreateGuessMutationVariables>;

/**
 * __useCreateGuessMutation__
 *
 * To run a mutation, you first call `useCreateGuessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGuessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGuessMutation, { data, loading, error }] = useCreateGuessMutation({
 *   variables: {
 *      player: // value for 'player'
 *      lobbyGame: // value for 'lobbyGame'
 *   },
 * });
 */
export function useCreateGuessMutation(baseOptions?: Apollo.MutationHookOptions<CreateGuessMutation, CreateGuessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGuessMutation, CreateGuessMutationVariables>(CreateGuessDocument, options);
      }
export type CreateGuessMutationHookResult = ReturnType<typeof useCreateGuessMutation>;
export type CreateGuessMutationResult = Apollo.MutationResult<CreateGuessMutation>;
export type CreateGuessMutationOptions = Apollo.BaseMutationOptions<CreateGuessMutation, CreateGuessMutationVariables>;
export const FinishGuessDocument = gql`
    mutation FinishGuess($id: ID!, $latitude: Float!, $longitude: Float!, $guessEnd: CustomDateTime!) {
  guessUpdate(
    newGuessmodel: {id: $id, latitude: $latitude, longitude: $longitude, guessEnd: $guessEnd}
  ) {
    ok
    guessmodel {
      id
      guessStart
      guessEnd
    }
  }
}
    `;
export type FinishGuessMutationFn = Apollo.MutationFunction<FinishGuessMutation, FinishGuessMutationVariables>;

/**
 * __useFinishGuessMutation__
 *
 * To run a mutation, you first call `useFinishGuessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFinishGuessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [finishGuessMutation, { data, loading, error }] = useFinishGuessMutation({
 *   variables: {
 *      id: // value for 'id'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      guessEnd: // value for 'guessEnd'
 *   },
 * });
 */
export function useFinishGuessMutation(baseOptions?: Apollo.MutationHookOptions<FinishGuessMutation, FinishGuessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FinishGuessMutation, FinishGuessMutationVariables>(FinishGuessDocument, options);
      }
export type FinishGuessMutationHookResult = ReturnType<typeof useFinishGuessMutation>;
export type FinishGuessMutationResult = Apollo.MutationResult<FinishGuessMutation>;
export type FinishGuessMutationOptions = Apollo.BaseMutationOptions<FinishGuessMutation, FinishGuessMutationVariables>;
export const CurrentGuessDocument = gql`
    query CurrentGuess($playerId: ID!, $locationId: ID!) {
  currentGuess(playerId: $playerId, locationId: $locationId) {
    guessEnd
    guessStart
    id
  }
}
    `;

/**
 * __useCurrentGuessQuery__
 *
 * To run a query within a React component, call `useCurrentGuessQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentGuessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentGuessQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      locationId: // value for 'locationId'
 *   },
 * });
 */
export function useCurrentGuessQuery(baseOptions: Apollo.QueryHookOptions<CurrentGuessQuery, CurrentGuessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentGuessQuery, CurrentGuessQueryVariables>(CurrentGuessDocument, options);
      }
export function useCurrentGuessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentGuessQuery, CurrentGuessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentGuessQuery, CurrentGuessQueryVariables>(CurrentGuessDocument, options);
        }
export type CurrentGuessQueryHookResult = ReturnType<typeof useCurrentGuessQuery>;
export type CurrentGuessLazyQueryHookResult = ReturnType<typeof useCurrentGuessLazyQuery>;
export type CurrentGuessQueryResult = Apollo.QueryResult<CurrentGuessQuery, CurrentGuessQueryVariables>;
export const PlayerInfoDocument = gql`
    query PlayerInfo($id: ID!) {
  player(id: $id) {
    name
    id
  }
}
    `;

/**
 * __usePlayerInfoQuery__
 *
 * To run a query within a React component, call `usePlayerInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlayerInfoQuery(baseOptions: Apollo.QueryHookOptions<PlayerInfoQuery, PlayerInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerInfoQuery, PlayerInfoQueryVariables>(PlayerInfoDocument, options);
      }
export function usePlayerInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerInfoQuery, PlayerInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerInfoQuery, PlayerInfoQueryVariables>(PlayerInfoDocument, options);
        }
export type PlayerInfoQueryHookResult = ReturnType<typeof usePlayerInfoQuery>;
export type PlayerInfoLazyQueryHookResult = ReturnType<typeof usePlayerInfoLazyQuery>;
export type PlayerInfoQueryResult = Apollo.QueryResult<PlayerInfoQuery, PlayerInfoQueryVariables>;
export const RandomLocationsDocument = gql`
    query RandomLocations($count: Int, $minDensity: Int, $maxDensity: Int) {
  randomLocation(count: $count, minDensity: $minDensity, maxDensity: $maxDensity) {
    latitude
    longitude
    populationDensity
  }
}
    `;

/**
 * __useRandomLocationsQuery__
 *
 * To run a query within a React component, call `useRandomLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRandomLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRandomLocationsQuery({
 *   variables: {
 *      count: // value for 'count'
 *      minDensity: // value for 'minDensity'
 *      maxDensity: // value for 'maxDensity'
 *   },
 * });
 */
export function useRandomLocationsQuery(baseOptions?: Apollo.QueryHookOptions<RandomLocationsQuery, RandomLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RandomLocationsQuery, RandomLocationsQueryVariables>(RandomLocationsDocument, options);
      }
export function useRandomLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RandomLocationsQuery, RandomLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RandomLocationsQuery, RandomLocationsQueryVariables>(RandomLocationsDocument, options);
        }
export type RandomLocationsQueryHookResult = ReturnType<typeof useRandomLocationsQuery>;
export type RandomLocationsLazyQueryHookResult = ReturnType<typeof useRandomLocationsLazyQuery>;
export type RandomLocationsQueryResult = Apollo.QueryResult<RandomLocationsQuery, RandomLocationsQueryVariables>;
export const LobbyPlayerDocument = gql`
    query LobbyPlayer($id: ID!) {
  lobbyPlayer(id: $id) {
    id
    state
    player {
      id
    }
    lobby {
      id
    }
  }
}
    `;

/**
 * __useLobbyPlayerQuery__
 *
 * To run a query within a React component, call `useLobbyPlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useLobbyPlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLobbyPlayerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLobbyPlayerQuery(baseOptions: Apollo.QueryHookOptions<LobbyPlayerQuery, LobbyPlayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LobbyPlayerQuery, LobbyPlayerQueryVariables>(LobbyPlayerDocument, options);
      }
export function useLobbyPlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LobbyPlayerQuery, LobbyPlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LobbyPlayerQuery, LobbyPlayerQueryVariables>(LobbyPlayerDocument, options);
        }
export type LobbyPlayerQueryHookResult = ReturnType<typeof useLobbyPlayerQuery>;
export type LobbyPlayerLazyQueryHookResult = ReturnType<typeof useLobbyPlayerLazyQuery>;
export type LobbyPlayerQueryResult = Apollo.QueryResult<LobbyPlayerQuery, LobbyPlayerQueryVariables>;
export const LobbyDetailDocument = gql`
    query LobbyDetail($lobbyId: ID!) {
  lobby(id: $lobbyId) {
    id
    name
    state
    lobbyGame {
      id
    }
    lobbyPlayers {
      player {
        id
        name
      }
      state
    }
    owner {
      name
      id
    }
  }
}
    `;

/**
 * __useLobbyDetailQuery__
 *
 * To run a query within a React component, call `useLobbyDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useLobbyDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLobbyDetailQuery({
 *   variables: {
 *      lobbyId: // value for 'lobbyId'
 *   },
 * });
 */
export function useLobbyDetailQuery(baseOptions: Apollo.QueryHookOptions<LobbyDetailQuery, LobbyDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LobbyDetailQuery, LobbyDetailQueryVariables>(LobbyDetailDocument, options);
      }
export function useLobbyDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LobbyDetailQuery, LobbyDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LobbyDetailQuery, LobbyDetailQueryVariables>(LobbyDetailDocument, options);
        }
export type LobbyDetailQueryHookResult = ReturnType<typeof useLobbyDetailQuery>;
export type LobbyDetailLazyQueryHookResult = ReturnType<typeof useLobbyDetailLazyQuery>;
export type LobbyDetailQueryResult = Apollo.QueryResult<LobbyDetailQuery, LobbyDetailQueryVariables>;
export const OpenLobbyListDocument = gql`
    query OpenLobbyList($from: DateTime!) {
  lobbyList(state: "open", created_Gt: $from) {
    id
    owner {
      name
      id
    }
    lobbyPlayers {
      player {
        id
      }
    }
    name
    state
  }
}
    `;

/**
 * __useOpenLobbyListQuery__
 *
 * To run a query within a React component, call `useOpenLobbyListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOpenLobbyListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOpenLobbyListQuery({
 *   variables: {
 *      from: // value for 'from'
 *   },
 * });
 */
export function useOpenLobbyListQuery(baseOptions: Apollo.QueryHookOptions<OpenLobbyListQuery, OpenLobbyListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OpenLobbyListQuery, OpenLobbyListQueryVariables>(OpenLobbyListDocument, options);
      }
export function useOpenLobbyListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OpenLobbyListQuery, OpenLobbyListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OpenLobbyListQuery, OpenLobbyListQueryVariables>(OpenLobbyListDocument, options);
        }
export type OpenLobbyListQueryHookResult = ReturnType<typeof useOpenLobbyListQuery>;
export type OpenLobbyListLazyQueryHookResult = ReturnType<typeof useOpenLobbyListLazyQuery>;
export type OpenLobbyListQueryResult = Apollo.QueryResult<OpenLobbyListQuery, OpenLobbyListQueryVariables>;
export const ResultsDocument = gql`
    query Results($locationId: ID!, $lobbyGameId: ID!) {
  results(locationId: $locationId, lobbyGameId: $lobbyGameId) {
    location {
      latitude
      longitude
    }
    results {
      score
      totalScore
      guess {
        id
        latitude
        longitude
      }
      distance
      lobbyPlayer {
        id
        state
        player {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useResultsQuery__
 *
 * To run a query within a React component, call `useResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResultsQuery({
 *   variables: {
 *      locationId: // value for 'locationId'
 *      lobbyGameId: // value for 'lobbyGameId'
 *   },
 * });
 */
export function useResultsQuery(baseOptions: Apollo.QueryHookOptions<ResultsQuery, ResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ResultsQuery, ResultsQueryVariables>(ResultsDocument, options);
      }
export function useResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResultsQuery, ResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ResultsQuery, ResultsQueryVariables>(ResultsDocument, options);
        }
export type ResultsQueryHookResult = ReturnType<typeof useResultsQuery>;
export type ResultsLazyQueryHookResult = ReturnType<typeof useResultsLazyQuery>;
export type ResultsQueryResult = Apollo.QueryResult<ResultsQuery, ResultsQueryVariables>;
export const FinalResultsDocument = gql`
    query FinalResults($lobbyId: ID!) {
  finalResults(lobbyId: $lobbyId) {
    lobbyPlayer {
      id
      state
      player {
        id
        name
      }
    }
    locations {
      id
      latitude
      longitude
    }
    totalScore
    results {
      score
      guess {
        id
        latitude
        longitude
      }
      distance
    }
  }
}
    `;

/**
 * __useFinalResultsQuery__
 *
 * To run a query within a React component, call `useFinalResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFinalResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFinalResultsQuery({
 *   variables: {
 *      lobbyId: // value for 'lobbyId'
 *   },
 * });
 */
export function useFinalResultsQuery(baseOptions: Apollo.QueryHookOptions<FinalResultsQuery, FinalResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FinalResultsQuery, FinalResultsQueryVariables>(FinalResultsDocument, options);
      }
export function useFinalResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FinalResultsQuery, FinalResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FinalResultsQuery, FinalResultsQueryVariables>(FinalResultsDocument, options);
        }
export type FinalResultsQueryHookResult = ReturnType<typeof useFinalResultsQuery>;
export type FinalResultsLazyQueryHookResult = ReturnType<typeof useFinalResultsLazyQuery>;
export type FinalResultsQueryResult = Apollo.QueryResult<FinalResultsQuery, FinalResultsQueryVariables>;
export const LobbyStateDocument = gql`
    query LobbyState($id: ID!) {
  lobbyId @client @export(as: "id")
  lobbyState: lobby(id: $id) {
    id
    name
    state
    lobbyGame {
      id
      game {
        id
      }
    }
    lobbyPlayers {
      id
      player {
        id
        name
      }
      state
    }
    owner {
      id
      name
    }
  }
}
    `;

/**
 * __useLobbyStateQuery__
 *
 * To run a query within a React component, call `useLobbyStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useLobbyStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLobbyStateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLobbyStateQuery(baseOptions: Apollo.QueryHookOptions<LobbyStateQuery, LobbyStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LobbyStateQuery, LobbyStateQueryVariables>(LobbyStateDocument, options);
      }
export function useLobbyStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LobbyStateQuery, LobbyStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LobbyStateQuery, LobbyStateQueryVariables>(LobbyStateDocument, options);
        }
export type LobbyStateQueryHookResult = ReturnType<typeof useLobbyStateQuery>;
export type LobbyStateLazyQueryHookResult = ReturnType<typeof useLobbyStateLazyQuery>;
export type LobbyStateQueryResult = Apollo.QueryResult<LobbyStateQuery, LobbyStateQueryVariables>;
export const LobbyPlayerStateDocument = gql`
    query LobbyPlayerState($id: ID!) {
  playerId @client @export(as: "id")
  lobbyPlayerState: lobbyPlayer(id: $id) {
    id
    lobby {
      id
    }
    state
  }
}
    `;

/**
 * __useLobbyPlayerStateQuery__
 *
 * To run a query within a React component, call `useLobbyPlayerStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useLobbyPlayerStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLobbyPlayerStateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLobbyPlayerStateQuery(baseOptions: Apollo.QueryHookOptions<LobbyPlayerStateQuery, LobbyPlayerStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LobbyPlayerStateQuery, LobbyPlayerStateQueryVariables>(LobbyPlayerStateDocument, options);
      }
export function useLobbyPlayerStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LobbyPlayerStateQuery, LobbyPlayerStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LobbyPlayerStateQuery, LobbyPlayerStateQueryVariables>(LobbyPlayerStateDocument, options);
        }
export type LobbyPlayerStateQueryHookResult = ReturnType<typeof useLobbyPlayerStateQuery>;
export type LobbyPlayerStateLazyQueryHookResult = ReturnType<typeof useLobbyPlayerStateLazyQuery>;
export type LobbyPlayerStateQueryResult = Apollo.QueryResult<LobbyPlayerStateQuery, LobbyPlayerStateQueryVariables>;
export const PlayerStateDocument = gql`
    query PlayerState($id: ID!) {
  playerId @client @export(as: "id")
  playerState: player(id: $id) {
    id
    name
    lastLogin
  }
}
    `;

/**
 * __usePlayerStateQuery__
 *
 * To run a query within a React component, call `usePlayerStateQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerStateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlayerStateQuery(baseOptions: Apollo.QueryHookOptions<PlayerStateQuery, PlayerStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerStateQuery, PlayerStateQueryVariables>(PlayerStateDocument, options);
      }
export function usePlayerStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerStateQuery, PlayerStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerStateQuery, PlayerStateQueryVariables>(PlayerStateDocument, options);
        }
export type PlayerStateQueryHookResult = ReturnType<typeof usePlayerStateQuery>;
export type PlayerStateLazyQueryHookResult = ReturnType<typeof usePlayerStateLazyQuery>;
export type PlayerStateQueryResult = Apollo.QueryResult<PlayerStateQuery, PlayerStateQueryVariables>;
export const GameStateDocument = gql`
    query GameState($lobbyGameId: ID!) {
  gameId @client @export(as: "lobbyGameId")
  gameState: lobbyGame(id: $lobbyGameId) {
    id
    game {
      id
      name
      timeLimit
      rounds
    }
  }
}
    `;

/**
 * __useGameStateQuery__
 *
 * To run a query within a React component, call `useGameStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameStateQuery({
 *   variables: {
 *      lobbyGameId: // value for 'lobbyGameId'
 *   },
 * });
 */
export function useGameStateQuery(baseOptions: Apollo.QueryHookOptions<GameStateQuery, GameStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameStateQuery, GameStateQueryVariables>(GameStateDocument, options);
      }
export function useGameStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameStateQuery, GameStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameStateQuery, GameStateQueryVariables>(GameStateDocument, options);
        }
export type GameStateQueryHookResult = ReturnType<typeof useGameStateQuery>;
export type GameStateLazyQueryHookResult = ReturnType<typeof useGameStateLazyQuery>;
export type GameStateQueryResult = Apollo.QueryResult<GameStateQuery, GameStateQueryVariables>;
export const LocationStateDocument = gql`
    query LocationState($lobbyId: ID!, $playerId: ID!) {
  lobbyId @client @export(as: "lobbyId")
  playerId @client @export(as: "playerId")
  locationState: currentLocation(lobbyId: $lobbyId, playerId: $playerId) {
    location {
      id
      latitude
      longitude
      game {
        id
      }
    }
    lobbyGame {
      id
    }
    roundNumber
  }
}
    `;

/**
 * __useLocationStateQuery__
 *
 * To run a query within a React component, call `useLocationStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationStateQuery({
 *   variables: {
 *      lobbyId: // value for 'lobbyId'
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useLocationStateQuery(baseOptions: Apollo.QueryHookOptions<LocationStateQuery, LocationStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationStateQuery, LocationStateQueryVariables>(LocationStateDocument, options);
      }
export function useLocationStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationStateQuery, LocationStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationStateQuery, LocationStateQueryVariables>(LocationStateDocument, options);
        }
export type LocationStateQueryHookResult = ReturnType<typeof useLocationStateQuery>;
export type LocationStateLazyQueryHookResult = ReturnType<typeof useLocationStateLazyQuery>;
export type LocationStateQueryResult = Apollo.QueryResult<LocationStateQuery, LocationStateQueryVariables>;
export const GuessStateDocument = gql`
    query GuessState($playerId: ID!, $locationId: ID!) {
  playerId @client @export(as: "playerId")
  locationId @client @export(as: "locationId")
  guessState: currentGuess(playerId: $playerId, locationId: $locationId) {
    guessEnd
    guessStart
    id
  }
}
    `;

/**
 * __useGuessStateQuery__
 *
 * To run a query within a React component, call `useGuessStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuessStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuessStateQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      locationId: // value for 'locationId'
 *   },
 * });
 */
export function useGuessStateQuery(baseOptions: Apollo.QueryHookOptions<GuessStateQuery, GuessStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GuessStateQuery, GuessStateQueryVariables>(GuessStateDocument, options);
      }
export function useGuessStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuessStateQuery, GuessStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GuessStateQuery, GuessStateQueryVariables>(GuessStateDocument, options);
        }
export type GuessStateQueryHookResult = ReturnType<typeof useGuessStateQuery>;
export type GuessStateLazyQueryHookResult = ReturnType<typeof useGuessStateLazyQuery>;
export type GuessStateQueryResult = Apollo.QueryResult<GuessStateQuery, GuessStateQueryVariables>;
export const LobbyStateSyncDocument = gql`
    subscription LobbyStateSync($lobbyId: String!) {
  lobby: lobbyUpdate(lobbyId: $lobbyId) {
    id: lobbyId
    name
    state
    lobbyGame {
      id
      game {
        id
      }
    }
    lobbyPlayers {
      id
      player {
        id
        name
      }
      state
    }
    owner {
      id
      name
    }
  }
}
    `;

/**
 * __useLobbyStateSyncSubscription__
 *
 * To run a query within a React component, call `useLobbyStateSyncSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLobbyStateSyncSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLobbyStateSyncSubscription({
 *   variables: {
 *      lobbyId: // value for 'lobbyId'
 *   },
 * });
 */
export function useLobbyStateSyncSubscription(baseOptions: Apollo.SubscriptionHookOptions<LobbyStateSyncSubscription, LobbyStateSyncSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LobbyStateSyncSubscription, LobbyStateSyncSubscriptionVariables>(LobbyStateSyncDocument, options);
      }
export type LobbyStateSyncSubscriptionHookResult = ReturnType<typeof useLobbyStateSyncSubscription>;
export type LobbyStateSyncSubscriptionResult = Apollo.SubscriptionResult<LobbyStateSyncSubscription>;
export const LobbyPlayerStateSyncDocument = gql`
    subscription LobbyPlayerStateSync($playerId: String!) {
  lobbyPlayer: lobbyPlayerUpdate(playerId: $playerId) {
    state
    id: playerId
    lobby {
      id
    }
  }
}
    `;

/**
 * __useLobbyPlayerStateSyncSubscription__
 *
 * To run a query within a React component, call `useLobbyPlayerStateSyncSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLobbyPlayerStateSyncSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLobbyPlayerStateSyncSubscription({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useLobbyPlayerStateSyncSubscription(baseOptions: Apollo.SubscriptionHookOptions<LobbyPlayerStateSyncSubscription, LobbyPlayerStateSyncSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LobbyPlayerStateSyncSubscription, LobbyPlayerStateSyncSubscriptionVariables>(LobbyPlayerStateSyncDocument, options);
      }
export type LobbyPlayerStateSyncSubscriptionHookResult = ReturnType<typeof useLobbyPlayerStateSyncSubscription>;
export type LobbyPlayerStateSyncSubscriptionResult = Apollo.SubscriptionResult<LobbyPlayerStateSyncSubscription>;
export type CurrentGameKeySpecifier = ('location' | 'lobbyGame' | 'roundNumber' | CurrentGameKeySpecifier)[];
export type CurrentGameFieldPolicy = {
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyGame?: FieldPolicy<any> | FieldReadFunction<any>,
	roundNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteJSONWebTokenCookieKeySpecifier = ('deleted' | DeleteJSONWebTokenCookieKeySpecifier)[];
export type DeleteJSONWebTokenCookieFieldPolicy = {
	deleted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorTypeKeySpecifier = ('field' | 'messages' | ErrorTypeKeySpecifier)[];
export type ErrorTypeFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FinalResultKeySpecifier = ('score' | 'guess' | 'distance' | FinalResultKeySpecifier)[];
export type FinalResultFieldPolicy = {
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	guess?: FieldPolicy<any> | FieldReadFunction<any>,
	distance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FinalResultsKeySpecifier = ('lobbyPlayer' | 'totalScore' | 'results' | 'locations' | FinalResultsKeySpecifier)[];
export type FinalResultsFieldPolicy = {
	lobbyPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	totalScore?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameKeySpecifier = ('creator' | 'gameLobbies' | 'id' | 'name' | 'timeLimit' | 'rounds' | GameKeySpecifier)[];
export type GameFieldPolicy = {
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	gameLobbies?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	timeLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	rounds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameSerializerMutationKeySpecifier = ('gamemodel' | 'ok' | 'errors' | GameSerializerMutationKeySpecifier)[];
export type GameSerializerMutationFieldPolicy = {
	gamemodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameUpdateSerializerMutationKeySpecifier = ('gamemodel' | 'ok' | 'errors' | GameUpdateSerializerMutationKeySpecifier)[];
export type GameUpdateSerializerMutationFieldPolicy = {
	gamemodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuessKeySpecifier = ('guessEnd' | 'guessStart' | 'id' | 'latitude' | 'lobbyGame' | 'location' | 'longitude' | 'player' | GuessKeySpecifier)[];
export type GuessFieldPolicy = {
	guessEnd?: FieldPolicy<any> | FieldReadFunction<any>,
	guessStart?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyGame?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuessCreateSerializerMutationKeySpecifier = ('guessmodel' | 'ok' | 'errors' | GuessCreateSerializerMutationKeySpecifier)[];
export type GuessCreateSerializerMutationFieldPolicy = {
	guessmodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GuessUpdateSerializerMutationKeySpecifier = ('guessmodel' | 'ok' | 'errors' | GuessUpdateSerializerMutationKeySpecifier)[];
export type GuessUpdateSerializerMutationFieldPolicy = {
	guessmodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LobbyKeySpecifier = ('created' | 'id' | 'lobbyGame' | 'lobbyPlayers' | 'name' | 'owner' | 'state' | LobbyKeySpecifier)[];
export type LobbyFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyGame?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayers?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LobbyGameKeySpecifier = ('game' | 'id' | 'lobbies' | LobbyGameKeySpecifier)[];
export type LobbyGameFieldPolicy = {
	game?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LobbyGameSerializerMutationKeySpecifier = ('lobbygamemodel' | 'ok' | 'errors' | LobbyGameSerializerMutationKeySpecifier)[];
export type LobbyGameSerializerMutationFieldPolicy = {
	lobbygamemodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LobbyGameUpdateSerializerMutationKeySpecifier = ('lobbygamemodel' | 'ok' | 'errors' | LobbyGameUpdateSerializerMutationKeySpecifier)[];
export type LobbyGameUpdateSerializerMutationFieldPolicy = {
	lobbygamemodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LobbyPlayerKeySpecifier = ('guesses' | 'lobby' | 'player' | 'state' | 'id' | LobbyPlayerKeySpecifier)[];
export type LobbyPlayerFieldPolicy = {
	guesses?: FieldPolicy<any> | FieldReadFunction<any>,
	lobby?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LobbyPlayerSerializerMutationKeySpecifier = ('lobbyplayermodel' | 'ok' | 'errors' | LobbyPlayerSerializerMutationKeySpecifier)[];
export type LobbyPlayerSerializerMutationFieldPolicy = {
	lobbyplayermodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LobbyPlayerUpdateSubscriptionKeySpecifier = ('state' | 'playerId' | 'lobby' | LobbyPlayerUpdateSubscriptionKeySpecifier)[];
export type LobbyPlayerUpdateSubscriptionFieldPolicy = {
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	playerId?: FieldPolicy<any> | FieldReadFunction<any>,
	lobby?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LobbySerializerMutationKeySpecifier = ('lobbymodel' | 'ok' | 'errors' | 'lobbyPlayers' | LobbySerializerMutationKeySpecifier)[];
export type LobbySerializerMutationFieldPolicy = {
	lobbymodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LobbyUpdateSubscriptionKeySpecifier = ('state' | 'name' | 'lobbyPlayers' | 'lobbyId' | 'owner' | 'lobbyGame' | LobbyUpdateSubscriptionKeySpecifier)[];
export type LobbyUpdateSubscriptionFieldPolicy = {
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayers?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyId?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyGame?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('game' | 'guesses' | 'id' | 'latitude' | 'longitude' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	game?: FieldPolicy<any> | FieldReadFunction<any>,
	guesses?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationSerializerMutationKeySpecifier = ('locationmodel' | 'ok' | 'errors' | LocationSerializerMutationKeySpecifier)[];
export type LocationSerializerMutationFieldPolicy = {
	locationmodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MultipleLocationSerializerMutationKeySpecifier = ('locations' | MultipleLocationSerializerMutationKeySpecifier)[];
export type MultipleLocationSerializerMutationFieldPolicy = {
	locations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationsKeySpecifier = ('tokenAuth' | 'verifyToken' | 'refreshToken' | 'deleteTokenCookie' | 'registerPlayer' | 'playerUpdate' | 'playerDelete' | 'locationCreate' | 'batchLocationCreate' | 'guessUpdate' | 'guessCreate' | 'gameCreate' | 'gameUpdate' | 'gameDelete' | 'lobbyGameCreate' | 'lobbyGameUpdate' | 'lobbyGameDelete' | 'lobbyCreate' | 'lobbyDelete' | 'lobbyUpdate' | 'lobbyPlayerCreate' | 'lobbyPlayerDelete' | 'lobbyPlayerUpdate' | MutationsKeySpecifier)[];
export type MutationsFieldPolicy = {
	tokenAuth?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTokenCookie?: FieldPolicy<any> | FieldReadFunction<any>,
	registerPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	playerUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	playerDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	locationCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	batchLocationCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	guessUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	guessCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	gameCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	gameUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	gameDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyGameCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyGameUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyGameDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayerCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayerDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayerUpdate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ObtainJSONWebTokenKeySpecifier = ('payload' | 'refreshExpiresIn' | 'token' | ObtainJSONWebTokenKeySpecifier)[];
export type ObtainJSONWebTokenFieldPolicy = {
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshExpiresIn?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerKeySpecifier = ('createdGames' | 'id' | 'lastLogin' | 'lobbyPlayer' | 'name' | 'ownedLobbies' | PlayerKeySpecifier)[];
export type PlayerFieldPolicy = {
	createdGames?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ownedLobbies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerRegisterMutationKeySpecifier = ('player' | 'ok' | PlayerRegisterMutationKeySpecifier)[];
export type PlayerRegisterMutationFieldPolicy = {
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerRegisterTypeKeySpecifier = ('createdGames' | 'id' | 'lastLogin' | 'lobbyPlayer' | 'name' | 'ownedLobbies' | 'password' | PlayerRegisterTypeKeySpecifier)[];
export type PlayerRegisterTypeFieldPolicy = {
	createdGames?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ownedLobbies?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerSerializerMutationKeySpecifier = ('playermodel' | 'ok' | 'errors' | PlayerSerializerMutationKeySpecifier)[];
export type PlayerSerializerMutationFieldPolicy = {
	playermodel?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('currentGuess' | 'currentLocation' | 'finalResults' | 'gameId' | 'guessId' | 'lobby' | 'lobbyGame' | 'lobbyId' | 'lobbyList' | 'lobbyPlayer' | 'locationId' | 'player' | 'playerId' | 'randomLocation' | 'results' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	currentGuess?: FieldPolicy<any> | FieldReadFunction<any>,
	currentLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	finalResults?: FieldPolicy<any> | FieldReadFunction<any>,
	gameId?: FieldPolicy<any> | FieldReadFunction<any>,
	guessId?: FieldPolicy<any> | FieldReadFunction<any>,
	lobby?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyGame?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyId?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyList?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	locationId?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	playerId?: FieldPolicy<any> | FieldReadFunction<any>,
	randomLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RandomLocationKeySpecifier = ('latitude' | 'longitude' | 'populationDensity' | RandomLocationKeySpecifier)[];
export type RandomLocationFieldPolicy = {
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	populationDensity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefreshKeySpecifier = ('payload' | 'refreshExpiresIn' | 'token' | RefreshKeySpecifier)[];
export type RefreshFieldPolicy = {
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshExpiresIn?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResultKeySpecifier = ('lobbyPlayer' | 'score' | 'totalScore' | 'guess' | 'distance' | ResultKeySpecifier)[];
export type ResultFieldPolicy = {
	lobbyPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	totalScore?: FieldPolicy<any> | FieldReadFunction<any>,
	guess?: FieldPolicy<any> | FieldReadFunction<any>,
	distance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResultsKeySpecifier = ('results' | 'location' | ResultsKeySpecifier)[];
export type ResultsFieldPolicy = {
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('lobbyUpdate' | 'lobbyPlayerUpdate' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	lobbyUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	lobbyPlayerUpdate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyKeySpecifier = ('payload' | VerifyKeySpecifier)[];
export type VerifyFieldPolicy = {
	payload?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	CurrentGame?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrentGameKeySpecifier | (() => undefined | CurrentGameKeySpecifier),
		fields?: CurrentGameFieldPolicy,
	},
	DeleteJSONWebTokenCookie?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteJSONWebTokenCookieKeySpecifier | (() => undefined | DeleteJSONWebTokenCookieKeySpecifier),
		fields?: DeleteJSONWebTokenCookieFieldPolicy,
	},
	ErrorType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorTypeKeySpecifier | (() => undefined | ErrorTypeKeySpecifier),
		fields?: ErrorTypeFieldPolicy,
	},
	FinalResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FinalResultKeySpecifier | (() => undefined | FinalResultKeySpecifier),
		fields?: FinalResultFieldPolicy,
	},
	FinalResults?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FinalResultsKeySpecifier | (() => undefined | FinalResultsKeySpecifier),
		fields?: FinalResultsFieldPolicy,
	},
	Game?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameKeySpecifier | (() => undefined | GameKeySpecifier),
		fields?: GameFieldPolicy,
	},
	GameSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameSerializerMutationKeySpecifier | (() => undefined | GameSerializerMutationKeySpecifier),
		fields?: GameSerializerMutationFieldPolicy,
	},
	GameUpdateSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameUpdateSerializerMutationKeySpecifier | (() => undefined | GameUpdateSerializerMutationKeySpecifier),
		fields?: GameUpdateSerializerMutationFieldPolicy,
	},
	Guess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuessKeySpecifier | (() => undefined | GuessKeySpecifier),
		fields?: GuessFieldPolicy,
	},
	GuessCreateSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuessCreateSerializerMutationKeySpecifier | (() => undefined | GuessCreateSerializerMutationKeySpecifier),
		fields?: GuessCreateSerializerMutationFieldPolicy,
	},
	GuessUpdateSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GuessUpdateSerializerMutationKeySpecifier | (() => undefined | GuessUpdateSerializerMutationKeySpecifier),
		fields?: GuessUpdateSerializerMutationFieldPolicy,
	},
	Lobby?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LobbyKeySpecifier | (() => undefined | LobbyKeySpecifier),
		fields?: LobbyFieldPolicy,
	},
	LobbyGame?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LobbyGameKeySpecifier | (() => undefined | LobbyGameKeySpecifier),
		fields?: LobbyGameFieldPolicy,
	},
	LobbyGameSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LobbyGameSerializerMutationKeySpecifier | (() => undefined | LobbyGameSerializerMutationKeySpecifier),
		fields?: LobbyGameSerializerMutationFieldPolicy,
	},
	LobbyGameUpdateSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LobbyGameUpdateSerializerMutationKeySpecifier | (() => undefined | LobbyGameUpdateSerializerMutationKeySpecifier),
		fields?: LobbyGameUpdateSerializerMutationFieldPolicy,
	},
	LobbyPlayer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LobbyPlayerKeySpecifier | (() => undefined | LobbyPlayerKeySpecifier),
		fields?: LobbyPlayerFieldPolicy,
	},
	LobbyPlayerSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LobbyPlayerSerializerMutationKeySpecifier | (() => undefined | LobbyPlayerSerializerMutationKeySpecifier),
		fields?: LobbyPlayerSerializerMutationFieldPolicy,
	},
	LobbyPlayerUpdateSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LobbyPlayerUpdateSubscriptionKeySpecifier | (() => undefined | LobbyPlayerUpdateSubscriptionKeySpecifier),
		fields?: LobbyPlayerUpdateSubscriptionFieldPolicy,
	},
	LobbySerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LobbySerializerMutationKeySpecifier | (() => undefined | LobbySerializerMutationKeySpecifier),
		fields?: LobbySerializerMutationFieldPolicy,
	},
	LobbyUpdateSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LobbyUpdateSubscriptionKeySpecifier | (() => undefined | LobbyUpdateSubscriptionKeySpecifier),
		fields?: LobbyUpdateSubscriptionFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	LocationSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationSerializerMutationKeySpecifier | (() => undefined | LocationSerializerMutationKeySpecifier),
		fields?: LocationSerializerMutationFieldPolicy,
	},
	MultipleLocationSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MultipleLocationSerializerMutationKeySpecifier | (() => undefined | MultipleLocationSerializerMutationKeySpecifier),
		fields?: MultipleLocationSerializerMutationFieldPolicy,
	},
	Mutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationsKeySpecifier | (() => undefined | MutationsKeySpecifier),
		fields?: MutationsFieldPolicy,
	},
	ObtainJSONWebToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ObtainJSONWebTokenKeySpecifier | (() => undefined | ObtainJSONWebTokenKeySpecifier),
		fields?: ObtainJSONWebTokenFieldPolicy,
	},
	Player?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerKeySpecifier | (() => undefined | PlayerKeySpecifier),
		fields?: PlayerFieldPolicy,
	},
	PlayerRegisterMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerRegisterMutationKeySpecifier | (() => undefined | PlayerRegisterMutationKeySpecifier),
		fields?: PlayerRegisterMutationFieldPolicy,
	},
	PlayerRegisterType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerRegisterTypeKeySpecifier | (() => undefined | PlayerRegisterTypeKeySpecifier),
		fields?: PlayerRegisterTypeFieldPolicy,
	},
	PlayerSerializerMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerSerializerMutationKeySpecifier | (() => undefined | PlayerSerializerMutationKeySpecifier),
		fields?: PlayerSerializerMutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RandomLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RandomLocationKeySpecifier | (() => undefined | RandomLocationKeySpecifier),
		fields?: RandomLocationFieldPolicy,
	},
	Refresh?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefreshKeySpecifier | (() => undefined | RefreshKeySpecifier),
		fields?: RefreshFieldPolicy,
	},
	Result?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResultKeySpecifier | (() => undefined | ResultKeySpecifier),
		fields?: ResultFieldPolicy,
	},
	Results?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResultsKeySpecifier | (() => undefined | ResultsKeySpecifier),
		fields?: ResultsFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Verify?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifyKeySpecifier | (() => undefined | VerifyKeySpecifier),
		fields?: VerifyFieldPolicy,
	}
};