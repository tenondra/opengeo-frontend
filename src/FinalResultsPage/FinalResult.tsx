import { Tr } from '@chakra-ui/table';
import { Td } from '@chakra-ui/react';
import { FinalResults as FinalResultsType } from '../backend/model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import randomColor from 'randomcolor';
import { translatePlayerState } from '../Utils/Utils';

/*
 * Table row with a final result for a player
 * */
export default function FinalResult({
  result,
  selectedLocation,
}: {
  result: FinalResultsType;
  selectedLocation: number;
}) {
  const limit = 5000;

  const _distance = result?.results?.[selectedLocation]?.distance;
  const distance = _distance! > limit ? _distance! / 1000 : _distance!;
  let floatDecimals = 1;
  if (_distance! < 10000) {
    floatDecimals = 2;
  } else if (_distance! > 100000) {
    floatDecimals = 0;
  }

  const units = _distance! > limit ? 'km' : 'm';

  return (
    <Tr>
      <Td paddingLeft={10}>
        <FontAwesomeIcon
          size="1x"
          color={randomColor({
            luminosity: 'dark',
            seed: result.lobbyPlayer?.player?.id ?? undefined,
          })}
          icon={['fas', 'map-marker-alt']}
        />
      </Td>
      <Td>{result.lobbyPlayer?.player?.name ?? 'Unknown'}</Td>
      <Td textAlign={'end'}>{distance ? `${distance?.toFixed(floatDecimals)} ${units}` : 'DNF'}</Td>
      <Td textAlign={'end'}>{result.results?.[selectedLocation] ? result.results[selectedLocation]?.score : 'DNF'}</Td>
      <Td textAlign={'end'}>{result.totalScore}</Td>
      <Td textAlign={'center'}>
        {result.lobbyPlayer?.state ? translatePlayerState(result.lobbyPlayer.state) : 'Unknown'}
      </Td>
    </Tr>
  );
}
