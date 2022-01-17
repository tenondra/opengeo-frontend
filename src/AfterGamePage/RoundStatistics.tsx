import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import type { Result as ResultType } from '../backend/model';
import Result from './Result';

/*
 * Shows a table containing the round statistics
 * */
export default function RoundStatistics({ results }: { results: ResultType[] }) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th w="5%">Marker</Th>
          <Th>Player</Th>
          <Th textAlign={'end'} w="15%">
            Distance
          </Th>
          <Th textAlign={'end'} w="7%">
            Score
          </Th>
          <Th textAlign={'end'} w="12%">
            Total Score
          </Th>
          <Th textAlign={'center'} w="20%">
            State
          </Th>
        </Tr>
      </Thead>
      <Tbody>{results?.map(r => (r ? <Result key={r.lobbyPlayer?.id} result={r} /> : r))}</Tbody>
    </Table>
  );
}
