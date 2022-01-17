import { Tr } from '@chakra-ui/table';
import { Td } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import randomColor from 'randomcolor';
import { Result as ResultType } from '../backend/model';
import { translatePlayerState } from '../Utils/Utils';

/*
 * A table row with a result after a round
 * */
export default function Result({ result }: { result: ResultType }) {
  const limit = 5000;
  let floatDecimals = 1;
  if (result.distance! < 10000) {
    floatDecimals = 2;
  } else if (result.distance! > 100000) {
    floatDecimals = 0;
  }
  const units = result.distance! > limit ? 'km' : 'm';
  const distance = result.distance! > limit ? result.distance! / 1000 : result.distance!;

  console.log(result);

  return (
    <Tr>
      <Td paddingLeft={10}>
        <FontAwesomeIcon
          size="1x"
          color={randomColor({
            luminosity: 'dark',
            seed: result.lobbyPlayer?.player?.id,
          })}
          icon={['fas', 'map-marker-alt']}
        />
      </Td>
      <Td>{result.lobbyPlayer?.player?.name ?? 'Unknown'}</Td>
      <Td textAlign={'end'}>
        {distance.toFixed(floatDecimals)} {units}
      </Td>
      <Td textAlign={'end'} paddingLeft={6}>
        {result.score}
      </Td>
      <Td textAlign={'end'}>{result.totalScore}</Td>
      <Td textAlign={'center'}>
        {result.lobbyPlayer?.state ? translatePlayerState(result.lobbyPlayer.state) : 'Unknown'}
      </Td>
    </Tr>
  );
}
