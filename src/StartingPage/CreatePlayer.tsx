import { Box, VStack } from '@chakra-ui/react';
import { LobbyPlayerModelStateEnumCreate, useLobbyPlayerCreateMutation, useRegisterMutation } from '../backend/model';
import { Error, Loading } from '../Utils/Utils';
import { Heading } from '@chakra-ui/layout';
import { Formik } from 'formik';
import { InputControl } from 'formik-chakra-ui';
import * as Yup from 'yup';
import loginPlayer from '../backend/compositeActions';
import { useApolloClient } from '@apollo/client';
import CustomSubmitButton from '../Components/CustomSubmitButton';

/*
 * Form that allows registration of a player
 * */
export default function CreatePlayer() {
  const [createPlayer, { loading, error }] = useRegisterMutation();
  const [createLobbyPlayer] = useLobbyPlayerCreateMutation();
  const client = useApolloClient();

  const create = async (username: string, password: string) => {
    const res = await createPlayer({ variables: { name: username, password: password } });
    if (res.data?.registerPlayer?.ok && res.data.registerPlayer.player?.id) {
      await loginPlayer(client, res.data.registerPlayer.player.id, password);
      await createLobbyPlayer({
        variables: {
          playerId: res.data.registerPlayer.player?.id ?? '-1',
          state: LobbyPlayerModelStateEnumCreate.SearchingLobby,
        },
      });
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
    return <Error />;
  }

  const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  return (
    <VStack spacing={5}>
      <Heading size={'md'}>Sign Up</Heading>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => create(values.username, values.password)}
      >
        {({ handleSubmit }) => (
          <Box as="form" onSubmit={handleSubmit as any}>
            <VStack spacing={5} maxW={500} minW={300}>
              <InputControl name="username" label="Nickname" />
              <InputControl name="password" label="Password" inputProps={{ type: 'password' }} />
              <CustomSubmitButton>Register</CustomSubmitButton>
            </VStack>
          </Box>
        )}
      </Formik>
    </VStack>
  );
}
