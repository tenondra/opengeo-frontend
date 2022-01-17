import { SyntheticEvent, useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { MapContainer } from 'react-leaflet';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import useLocalStorageState from 'use-local-storage-state';
import { FaExpandAlt } from 'react-icons/all';

export default function ResizableMap({
  children,
  startHeight,
  startWidth,
  sizeStoreName,
}: {
  children: JSX.Element[];
  startHeight: number;
  startWidth: number;
  sizeStoreName?: string;
}) {
  const [resizing, setResizing] = useState(false);
  const [mapHeight, setMapHeight] = useState(startHeight);
  const [mapWidth, setMapWidth] = useState(startWidth);
  const [savedSize, setSavedSize] = useLocalStorageState(sizeStoreName ?? 'mapSize', {
    mapHeight: mapHeight,
    mapWidth: mapWidth,
  });

  useEffect(() => {
    if (sizeStoreName) {
      setMapHeight(Math.min(savedSize.mapHeight, window.innerHeight));
      setMapWidth(Math.min(savedSize.mapWidth, window.innerWidth));
      window.dispatchEvent(new Event('resize'));
    }
  }, [sizeStoreName]);

  if (mapWidth >= window.innerWidth) {
    setMapWidth(window.innerWidth - 1);
  }

  if (mapWidth <= 0) {
    setMapWidth(5);
  }

  if (mapHeight >= window.innerHeight) {
    setMapHeight(window.innerHeight - 1);
  }

  if (mapHeight <= 0) {
    setMapHeight(5);
  }

  const onMapResize = (e: SyntheticEvent<Element, Event>, { size }: ResizeCallbackData) => {
    setMapHeight(size.height);
    setMapWidth(size.width);
    window.dispatchEvent(new Event('resize'));
  };

  return (
    <Resizable
      minConstraints={[10, 10]}
      maxConstraints={[window.innerWidth, window.innerHeight]}
      handle={
        <Flex
          onMouseDownCapture={() => setResizing(true)}
          onMouseUpCapture={() => {
            setResizing(false);
            if (sizeStoreName) {
              setSavedSize({ mapWidth: mapWidth, mapHeight: mapHeight });
            }
          }}
          zIndex={10000}
          left={resizing ? 50 : 0}
          position={'absolute'}
          backgroundColor={'rgba(255, 255, 255, 0.8)'}
          padding={'.25em'}
        >
          <Box as="button" layerStyle="coloredButton">
            <FaExpandAlt size="1.5rem" rotate={'horizontal'} />
          </Box>
        </Flex>
      }
      resizeHandles={['nw']}
      height={mapHeight}
      width={mapWidth}
      onResize={onMapResize}
    >
      <Flex
        w={mapWidth}
        h={mapHeight}
        marginLeft={resizing ? 50 : 0}
        marginTop={resizing ? 50 : 0}
        paddingLeft={'1.5em'}
        paddingTop={'.5em'}
      >
        {resizing ? (
          <Flex w={'100%'} blur={100} backgroundColor={'rgba(0, 0, 0, 0.2)'} align={'center'} justify={'center'}>
            <Text>Resizing</Text>
          </Flex>
        ) : (
          <MapContainer style={{ width: '100%', height: '100%' }} center={[0, 0]} zoom={1}>
            {children}
          </MapContainer>
        )}
      </Flex>
    </Resizable>
  );
}
