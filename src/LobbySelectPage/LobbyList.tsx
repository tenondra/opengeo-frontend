import { useReactiveVar } from '@apollo/client';
import { Box, Flex, Grid, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  LobbyPlayer,
  LobbyPlayerModelStateEnumCreate,
  useLobbyPlayerCreateMutation,
  useLobbyPlayerJoinLobbyMutation,
  useOpenLobbyListQuery,
} from '../backend/model';
import { playerIdVar } from '../Utils/Cache';
import { Error, Loading } from '../Utils/Utils';
import LobbyListEntry from './LobbyListEntry';

/*
 * Container with a list of open lobbies
 * */
export default function LobbyList({
  lobbyId,
  lobbyPlayer,
}: {
  lobbyId: string | undefined;
  lobbyPlayer?: LobbyPlayer;
}) {
  const playerId = useReactiveVar(playerIdVar);
  // Yesterday at the same time
  const [now] = useState(new Date(new Date().getTime() - 1000 * 60 * 60 * 24).toISOString());

  // Query open lobbies no older than 24 hours
  const { loading, error, data, startPolling, stopPolling } = useOpenLobbyListQuery({ variables: { from: now } });
  const [createLobbyPlayer, { data: lData, loading: lLoading, error: lError }] = useLobbyPlayerCreateMutation();
  const [joinLobby] = useLobbyPlayerJoinLobbyMutation();

  useEffect(() => {
    startPolling(4000);
    return () => stopPolling();
  }, [startPolling, stopPolling]);

  const results = data && data.lobbyList && Array.from(data.lobbyList);
  const hasNotCreated = !lLoading && !lData && !lError;

  const addPlayerToLobby = async function ({
    event,
    id,
  }: {
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>;
    id: string;
  }) {
    event.preventDefault();
    if (lobbyPlayer) {
      await joinLobby({
        variables: {
          id: playerId!,
          lobbyId: id,
        },
      });
    } else {
      await createLobbyPlayer({
        variables: {
          playerId: playerId!,
          state: LobbyPlayerModelStateEnumCreate.Idle,
          lobbyId: id,
        },
      });
    }
  };
  if (loading) return <Loading />;

  console.log(lobbyId);

  if (data) {
    return (
      <Box layerStyle="contentBox">
        {loading && <Loading />}
        {error && <Error />}
        {data && (
          <Box layerStyle="contentBox">
            <Heading size="lg" paddingBottom={5}>
              Currently open lobbies: {data.lobbyList!.length}
            </Heading>
            <SimpleGrid layerStyle="list" spacing={2}>
              <Grid layerStyle="listItemColumns" templateColumns="repeat(6, minmax(0, 1fr))">
                <GridItem colSpan={2}>
                  <Flex layerStyle={['listColumn', 'firstColumn']}>
                    <Text>Lobby Name</Text>
                  </Flex>
                </GridItem>
                <GridItem colStart={4} colSpan={2}>
                  <Flex layerStyle={['listColumn', 'middleColumn']}>
                    <Text>Owner</Text>
                  </Flex>
                </GridItem>
                <GridItem colStart={6} colSpan={1}>
                  <Flex layerStyle={['listColumn', 'lastColumn']}>
                    <Text>Players</Text>
                  </Flex>
                </GridItem>
              </Grid>
              {results?.map(el => (
                <Box key={el!.owner!.id} layerStyle="contentBox">
                  {lLoading && <Loading key={el!.owner!.id} message="Joining" />}
                  {lError && <Error key={el!.owner!.id} message="Cannot join lobby" />}
                  {hasNotCreated && (
                    <LobbyListEntry
                      key={el!.id}
                      onClick={event => addPlayerToLobby({ event, id: el!.id!.toString() })}
                      lobbyName={el!.name || ''}
                      ownerName={el!.owner?.name || ''}
                      playersCount={el!.lobbyPlayers!.length}
                    />
                  )}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Box>
    );
  }

  return <Error />;
}
