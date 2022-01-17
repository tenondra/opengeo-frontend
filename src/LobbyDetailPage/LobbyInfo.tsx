import { Badge, Divider, Heading, Table, TableCaption, Tbody, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import { Lobby, LobbyUpdateSubscription } from '../backend/model';
import LobbyPlayer from './LobbyPlayer';

/*
 * Container with information about a lobby
 * */
export default function LobbyInfo({
                                    lobbyData,
                                    isOwner
                                  }: {
  lobbyData: Lobby | LobbyUpdateSubscription | undefined;
  isOwner: boolean;
}) {
  return (
    <VStack layerStyle="verticalContainer" spacing={5}>
      <Heading size="lg">Lobby &quot;{lobbyData?.name}&quot;</Heading>
      <Badge>{lobbyData?.state}</Badge>
      <Divider />
      <Table w="90%" variant="simple">
        <TableCaption fontSize="xl" placement="top">
          Currently joined players
        </TableCaption>
        <Thead>
          <Tr>
            {/* <Th>ID</Th> */}
            <Th w="60%">Username</Th>
            <Th w="18%" textAlign="center">
              Role
            </Th>
            <Th w="15%" padding={0} textAlign="center">
              State
            </Th>
            {isOwner && (
              <Th textAlign="center" padding={0} w="5%">
                Kick
              </Th>
            )}
          </Tr>
        </Thead>
        {lobbyData?.lobbyPlayers && (
          <Tbody>
            {Array.from(lobbyData.lobbyPlayers)!.map(p => {
              console.log(p);
              return (
                <LobbyPlayer
                  state={p!.state!}
                  key={p!.player!.id}
                  name={p!.player!.name || "Nameless"}
                  id={p!.player!.id}
                  isOwner={p?.id?.toString() === lobbyData.owner?.id}
                  ownerMenu={isOwner}
                />
              );
            })}
          </Tbody>
        )}
      </Table>
    </VStack>
  );
}
