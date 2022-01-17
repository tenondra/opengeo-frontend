import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

type Props = {
  lobbyName: string;
  ownerName: string;
  playersCount: number;
  onClick: MouseEventHandler<HTMLDivElement> & MouseEventHandler<HTMLButtonElement>;
};

/*
 * Displays information about a single lobby
 * */
export default function LobbyListEntry({ lobbyName, ownerName, playersCount, onClick }: Props) {
  return (
    <Box as="button" layerStyle="listItem" onClick={onClick}>
      <Grid templateColumns="repeat(6, minmax(0, 1fr))" layerStyle="listEntryColumns">
        <GridItem colSpan={3}>
          <Flex layerStyle={['listColumn', 'firstColumn']}>
            <Text>{lobbyName}</Text>
          </Flex>
        </GridItem>
        <GridItem colStart={4} colSpan={2}>
          <Flex layerStyle={['listColumn', 'middleColumn']}>
            <Text layerStyle="singleLineEllipsis">{ownerName}</Text>
          </Flex>
        </GridItem>
        <GridItem colStart={6} colSpan={1}>
          <Flex layerStyle={['listColumn', 'lastColumn']}>
            <Text>{playersCount}</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
