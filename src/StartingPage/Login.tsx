import { Box, VStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/layout';
import { Formik } from 'formik';
import { InputControl } from 'formik-chakra-ui';
import * as Yup from 'yup';
import loginPlayer from '../backend/compositeActions';
import { useApolloClient } from '@apollo/client';
import CustomSubmitButton from '../Components/CustomSubmitButton';

/*
 * Form that allows login of players
 * */
export default function Login() {
  const client = useApolloClient();

  const validationSchema = Yup.object({
    playerId: Yup.string().required(),
    loginPassword: Yup.string().required(),
  });

  return (
    <VStack spacing={5}>
      <Heading size={'md'}>Login</Heading>
      <Formik
        initialValues={{ playerId: '', loginPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors }) => {
          const result = await loginPlayer(client, values.playerId, values.loginPassword);
          console.log(result);
          if (result.errors) {
            await setErrors({
              playerId: 'Enter valid login credentials.',
              loginPassword: 'Enter valid login credentials.',
            });
          }
        }}
      >
        {({ handleSubmit }) => (
          <Box as="form" onSubmit={handleSubmit as any}>
            <VStack spacing={5} maxW={500} minW={300}>
              <InputControl name="playerId" label="Player ID" />
              <InputControl name="loginPassword" label="Password" inputProps={{ type: 'password' }} />
              <CustomSubmitButton>Login</CustomSubmitButton>
            </VStack>
          </Box>
        )}
      </Formik>
    </VStack>
  );
}
