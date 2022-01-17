import { Box, Flex } from '@chakra-ui/react';
import { SystemProps } from '@chakra-ui/system';
import React from 'react';
import { NavigationBar } from './Navigation';

/*
 * Basic horizontal page layout that stretches the whole screen
 * */
function BaseHorizontalPageLayout({
  children,
  direction = 'row',
  justify = 'space-evenly',
  ...rest
}: {
  children: JSX.Element[] | JSX.Element;
  direction?: SystemProps['flexDirection'];
  justify?: string;
}) {
  return (
    <Box textAlign="center" fontSize="xl">
      <Flex minH={'100vh'} maxW={'100vw'} direction={'row'} justify={'space-between'}>
        <NavigationBar />
        <Flex w="100%" minH="100vh" p={3} direction={direction} justify={justify} {...rest}>
          {children}
        </Flex>
      </Flex>
    </Box>
  );
}

/*
 * Basic vertical page layout that stretches the whole screen
 * */
function BaseVerticalPageLayout({
  children,
  direction = 'column',
  justify = 'start',
  ...rest
}: {
  children: JSX.Element[] | JSX.Element;
  direction?: SystemProps['flexDirection'];
  justify?: string;
}) {
  return (
    <Box textAlign="center" fontSize="xl">
      <Flex minH={'100vh'} maxW={'100vw'} direction={'row'} justify={'space-between'}>
        <NavigationBar />
        <Flex minH="100vh" w="100%" p={3} align={'center'} direction={direction} justify={justify} {...rest}>
          {children}
        </Flex>
      </Flex>
    </Box>
  );
}

export { BaseHorizontalPageLayout, BaseVerticalPageLayout };

export default BaseVerticalPageLayout;
