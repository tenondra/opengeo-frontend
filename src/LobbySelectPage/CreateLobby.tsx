import { useReactiveVar } from '@apollo/client';
import { Box, VStack } from '@chakra-ui/react';
import { useLobbyCreateMutation } from '../backend/model';
import { lobbyIdVar, playerIdVar } from '../Utils/Cache';
import * as Yup from 'yup';
import { InputControl } from 'formik-chakra-ui';
import { Formik } from 'formik';
import CustomSubmitButton from '../Components/CustomSubmitButton';

/*
 * Container with a form that allows creation of a lobby
 * */
export default function CreateLobby() {
  const playerId = useReactiveVar(playerIdVar);
  const [createLobby, { loading }] = useLobbyCreateMutation();

  const handleLobbyCreation = async function (name: string) {
    //TODO: maybe lobby reuse when no game was created
    const lobbyData = await createLobby({
      variables: {
        name: name,
        owner: playerId!,
      },
    });
    if (lobbyData.data?.lobbyCreate?.ok) {
      lobbyIdVar(lobbyData.data?.lobbyCreate?.lobbymodel?.id?.toString());
    }
    return lobbyData;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        const results = await handleLobbyCreation(values.name);
        console.log(results);
        if (!results.data?.lobbyCreate?.ok) {
          await setSubmitting(false);
          console.log('HERE');
          await setErrors({ name: 'Invalid lobby name' });
        }
      }}
    >
      {({ handleSubmit }) => (
        <Box as="form" onSubmit={handleSubmit as any} layerStyle={'contentBox'}>
          <VStack className={'verticalForm'}>
            <InputControl name="name" label="Lobby name" />
            <CustomSubmitButton isLoading={loading}>Create</CustomSubmitButton>
          </VStack>
        </Box>
      )}
    </Formik>
  );
}
