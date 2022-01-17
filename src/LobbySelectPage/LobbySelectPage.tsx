import { useReactiveVar } from '@apollo/client';
import { Center, Divider, Flex, Heading, VStack } from '@chakra-ui/react';
import { lobbyIdVar } from '../Utils/Cache';
import { Loading } from '../Utils/Utils';
import CreateLobby from './CreateLobby';
import LobbyList from './LobbyList';
import useStateData from '../Utils/StateManagement';
import { BaseHorizontalPageLayout } from '../Components/BasePageLayout';
import React from 'react';

/*
 * Page that allows users to join and create lobbies
 * */
export default function LobbySelectPage() {
  const lobbyId = useReactiveVar(lobbyIdVar);

  const [stateLoading, stateData] = useStateData();
  const { lobbyPlayer } = stateData;

  if (stateLoading) return <Loading />;

  return (
    <BaseHorizontalPageLayout>
      <VStack direction="column" justify="baseline" align="center" h="100%" w="65%" spacing={5} p={5}>
        <LobbyList lobbyId={lobbyId} lobbyPlayer={lobbyPlayer} />
      </VStack>
      <Center>
        <Divider size="lg" orientation="vertical" />
      </Center>
      <VStack align="center" direction="column" w="35%" p={5}>
        <Heading size="lg">Create a new lobby</Heading>
        <Flex justify="center" w="65%" h="100%" paddingTop={30}>
          <CreateLobby />
        </Flex>
      </VStack>
    </BaseHorizontalPageLayout>
  );
}
