import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Td, Tr } from '@chakra-ui/react';
import { LobbyPlayerModelStateEnum, Scalars, useLobbyPlayerLeaveLobbyMutation } from '../backend/model';
import { Loading, translatePlayerState } from '../Utils/Utils';

type LobbyPlayerTypes = {
  state: LobbyPlayerModelStateEnum;
  name: string;
  id: Scalars['ID'];
  isOwner: boolean;
  ownerMenu: boolean;
};

/*
 * Info about a player in a lobby
 * */
export default function LobbyPlayer({ state, name, id, isOwner, ownerMenu }: LobbyPlayerTypes) {
  const [kick, { loading }] = useLobbyPlayerLeaveLobbyMutation({
    variables: { id: id },
  });
  const role = isOwner ? 'Owner' : 'Pleb';

  const removePlayer = () => kick();
  return (
    <Tr>
      {/* <Td w="6%">{id}</Td> */}
      <Td paddingRight={1}>{name}</Td>
      <Td paddingLeft={1} paddingRight={1} textAlign="center">
        {role}
      </Td>
      <Td paddingLeft={1} paddingRight={1} textAlign="center">
        {translatePlayerState(state)}
      </Td>
      {ownerMenu && (
        <Td textAlign="center" paddingLeft={1} paddingRight={1} m={0}>
          {role === 'Owner' ? (
            <Box />
          ) : loading ? (
            <Loading message={undefined} />
          ) : (
            <Flex as="button" layerStyle="kickButton" onClick={removePlayer}>
              <CloseIcon />
            </Flex>
          )}
        </Td>
      )}
    </Tr>
  );
}
