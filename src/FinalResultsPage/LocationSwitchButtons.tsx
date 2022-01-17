import { Button, HStack } from '@chakra-ui/react';
import { MutableRefObject } from 'react';
import type { Location as LocationType } from '../backend/model';

/*
 * Buttons for switching locations in the final results
 * */
export default function LocationSwitchButtons({
                                                locations,
                                                selectedIdx,
                                                setSelectedIdx,
                                                buttonHrefs
                                              }: {
  locations: (LocationType | null | undefined)[];
  selectedIdx: number;
  setSelectedIdx: (value: number) => void;
  buttonHrefs: MutableRefObject<HTMLButtonElement[]>;
}) {
  return (
    // TODO: CSS
    <HStack key="location-select" layerStyle="locationSwitchButtons" spacing={5}>
      {locations?.map((r, idx) => (
        <Button
          key={idx}
          variant={selectedIdx === idx ? 'solid' : 'outline'}
          width={'3rem'}
          onClick={() => {
            setSelectedIdx(idx);
            buttonHrefs.current[idx].scrollIntoView({ behavior: "smooth", inline: "center" });
          }}
          ref={e => {
            if (e) buttonHrefs.current.push(e);
          }}
        >
          {idx + 1}
        </Button>
      ))}
    </HStack>
  );
}
