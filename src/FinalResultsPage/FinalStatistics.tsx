import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import FinalResult from './FinalResult';
import { FinalResults } from '../backend/model';

/*
 * Table with final results
 * */
export default function FinalStatistics({
  results,
  selectedLocation,
}: {
  results: FinalResults[];
  selectedLocation: number;
}) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th w="5%">Marker</Th>
          <Th>Player</Th>
          <Th textAlign={'end'} w="12%">
            Distance
          </Th>
          <Th textAlign={'end'} w="7%">
            Score
          </Th>
          <Th textAlign={'end'} w="12%">
            Final score
          </Th>
          <Th textAlign={'center'} w="20%">
            State
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {results.map(r => (
          <FinalResult selectedLocation={selectedLocation} key={r!.lobbyPlayer?.id} result={r!} />
        ))}
      </Tbody>
    </Table>
  );
}
