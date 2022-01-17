import { LoginDocument, LoginMutation, LoginMutationVariables } from './model';
import { ApolloClient } from '@apollo/client';
import { playerIdVar } from '../Utils/Cache';

/*
 * Composition of multiple actions performed together
 * */

/*
 * Logs in a player using specified credentials
 * */
export default async function loginPlayer(client: ApolloClient<any>, playerId: string, password: string) {
  const response = await client.mutate<LoginMutation, LoginMutationVariables>({
    mutation: LoginDocument,
    variables: {
      playerId: playerId,
      password: password,
    },
    errorPolicy: 'all',
  });
  if (response.data?.tokenAuth?.token) {
    localStorage.setItem('refresh', response.data.tokenAuth.token);
    playerIdVar(playerId);
  }
  return response;
}
