import { Box, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher';
import CreatePlayer from './CreatePlayer';
import Login from './Login';

/*
 * The starting page
 * */
export default function StartingPage() {
  return (
    <Box textAlign="center" fontSize="xl">
      <ColorModeSwitcher right={3} top={3} position="absolute" />
      <VStack direction="column" justify="center" minH="100vh" p={3} spacing={20}>
        <Box>
          <Heading>Welcome to OpenGeo</Heading>
          <Text>an open source GeoGuessr alternative</Text>
        </Box>
        <Flex direction={'row'} h={'30vh'} justify={'space-around'} w={'80vw'}>
          <Login />
          <VStack>
            <Text>or</Text>
            <Divider orientation={'vertical'} />
          </VStack>
          <CreatePlayer />
        </Flex>
      </VStack>
    </Box>
  );
}
