import { Placement } from '@chakra-ui/popper';
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useApolloClient, useReactiveVar } from '@apollo/client';
import { LogoutDocument, LogoutMutation, LogoutMutationVariables } from '../backend/model';
import { colorSchemeVar, playerIdVar } from '../Utils/Cache';
import * as Yup from 'yup';
import {
  FaAddressBook,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaExclamationCircle,
  FaMapMarkedAlt,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/all';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import useStateData from '../Utils/StateManagement';
import { Heading } from '@chakra-ui/layout';
import { translatePlayerState } from '../Utils/Utils';
import { colors } from '../Utils/theme';
import { ThemeTypings } from '@chakra-ui/styled-system';
import { Formik } from 'formik';
import { SelectControl } from 'formik-chakra-ui';
import CustomSubmitButton from './CustomSubmitButton';

const sidebarIconSize = '1.8rem';
const expandButtonSize = '1em';

function CollapsedNav({ signOut, logoutStatus }: { signOut: () => void; logoutStatus: boolean | undefined }) {
  const [, stateData] = useStateData();
  const { player } = stateData;

  return (
    <SimpleGrid spacing={'1rem'} layerStyle="collapsedNav">
      <VStack justify={'flex-start'} spacing={'1.5rem'}>
        <NavigationItem label={'User Details'}>
          <Link to={'#'}>
            <FaUser size={sidebarIconSize} />
          </Link>
        </NavigationItem>
        <Divider width={0} />
        <Badge
          sx={{
            'writing-mode': 'vertical-rl',
            'text-orientation': 'upright',
          }}
          lineHeight={'1rem'}
          paddingY={1}
          letterSpacing={-2}
        >
          {player?.id}
        </Badge>
        <Divider />
        <VStack spacing={'1rem'}>
          <NavigationItem label={'Saved Maps'}>
            <Link to={'#'}>
              <FaMapMarkedAlt size={sidebarIconSize} />
            </Link>
          </NavigationItem>
          <NavigationItem label={'Friends'}>
            <Link to={'#'}>
              <FaAddressBook size={sidebarIconSize} />
            </Link>
          </NavigationItem>
        </VStack>
      </VStack>
      <VStack justify={'center'} spacing={'1rem'}>
        {/* Items in middle currently unused */}
      </VStack>
      <VStack justify={'flex-end'} spacing={'1rem'}>
        <NavigationItem label={'Switch Color Mode'}>
          <ColorModeSwitcher size={sidebarIconSize} />
        </NavigationItem>
        {logoutStatus === false && (
          <NavigationItem label={'Unable to sign out'}>
            <span>
              <FaExclamationCircle size={sidebarIconSize} />
            </span>
          </NavigationItem>
        )}
        <NavigationItem label={'Sign Out'}>
          <Stack as="button" aria-label={'Sign Out'} onClick={signOut} layerStyle="negativeTextButton">
            <FaSignOutAlt size={sidebarIconSize} />
          </Stack>
        </NavigationItem>
      </VStack>
    </SimpleGrid>
  );
}

function ExpandedNav({ signOut, logoutStatus }: { signOut: () => void; logoutStatus: boolean | undefined }) {
  const [, stateData] = useStateData();
  const { player, lobbyPlayer } = stateData;
  const colorScheme = useReactiveVar(colorSchemeVar);

  const setSelectedAccent = (color: string) => {
    colorSchemeVar(color as ThemeTypings['colorSchemes']);
  };

  return (
    <Flex layerStyle="expandedNav">
      <VStack spacing={'1rem'} w={'100%'}>
        {/* Player info */}
        <VStack maxW="100%">
          <FaUser size={sidebarIconSize} />
          <Heading maxW="100%" layerStyle="singleLineEllipsis" size="lg">
            {player?.name}
          </Heading>
        </VStack>
        <Badge p={'.4rem'} variant="outline">
          <HStack>
            <Heading size="md">Player ID</Heading>
            <Badge fontSize={'1.2rem'}>{player?.id}</Badge>
          </HStack>
        </Badge>
        <HStack>
          <Heading size="sm">Status</Heading>
          <Badge fontSize={'.8rem'}>{translatePlayerState(lobbyPlayer?.state)}</Badge>
        </HStack>
        {/* Navigation */}
        <Divider />
        <Spacer />
        <VStack spacing={'1rem'} align={'start'}>
          <Link to={'#'}>
            <HStack>
              <FaMapMarkedAlt size={sidebarIconSize} />
              <span>Saved Maps</span>
            </HStack>
          </Link>
          <Link to={'#'}>
            <HStack>
              <FaAddressBook size={sidebarIconSize} />
              <span>Friends</span>
            </HStack>
          </Link>
        </VStack>
      </VStack>
      <VStack justify={'flex-end'} spacing={'1rem'} w={'100%'}>
        <Formik
          initialValues={{ color: colorScheme }}
          validationSchema={Yup.object({ color: Yup.string().required() })}
          onSubmit={(values, { setSubmitting }) => {
            setSelectedAccent(values.color);
            setSubmitting(false);
          }}
        >
          {({ handleSubmit }) => (
            <HStack align={'flex-end'} as="form" onSubmit={handleSubmit as any}>
              <SelectControl label={'Color Accent'} name={'color'}>
                {colors.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </SelectControl>
              <CustomSubmitButton size={'sm'} fontSize={15} paddingY={5}>
                Apply
              </CustomSubmitButton>
            </HStack>
          )}
        </Formik>
        <Flex direction={'row'} justify={'space-evenly'} w={'100%'}>
          <VStack>
            {logoutStatus === false && (
              <NavigationItem label={'Unable to sign out'}>
                <span>
                  <FaExclamationCircle size={sidebarIconSize} />
                </span>
              </NavigationItem>
            )}
            <NavigationItem label={'Sign Out'} placement={'top'}>
              <Stack as="button" aria-label={'Sign Out'} onClick={signOut} layerStyle="negativeTextButton">
                <FaSignOutAlt size={sidebarIconSize} />
              </Stack>
            </NavigationItem>
          </VStack>
          <NavigationItem label={'Switch Color Mode'} placement={'top'}>
            <ColorModeSwitcher size={sidebarIconSize} />
          </NavigationItem>
        </Flex>
      </VStack>
    </Flex>
  );
}

/*
 * Sidebar with navigation
 * */
function NavigationBar() {
  const client = useApolloClient();
  const [logoutStatus, setLogoutStatus] = useState<boolean | undefined>();
  const [expanded, setExpanded] = useState(false);

  const signOut = async () => {
    const response = await client.mutate<LogoutMutation, LogoutMutationVariables>({ mutation: LogoutDocument });
    if (response.data?.deleteTokenCookie?.ok) {
      localStorage.removeItem('refresh');
      setLogoutStatus(true);
      playerIdVar(undefined);
      return;
    }
    setLogoutStatus(false);
  };

  return (
    <Box>
      {/* Empty box that reserves space for the collapsed navbar with absolute position */}
      <Box layerStyle="navbarPlaceholder" />
      {/* The navbar */}
      <HStack h={'100vh'} spacing={0} position="absolute" zIndex={10000} left={0}>
        {expanded ? (
          <ExpandedNav signOut={signOut} logoutStatus={logoutStatus} />
        ) : (
          <CollapsedNav signOut={signOut} logoutStatus={logoutStatus} />
        )}
        {/* Expand button */}
        <Button
          aria-label={`${expanded ? 'Collapse' : 'Expand'} Navigation Bar`}
          onClick={() => setExpanded(!expanded)}
          layerStyle="navbarExpandButton"
          variant="ghost"
          _focus={{}}
        >
          {expanded ? <FaAngleDoubleLeft size={expandButtonSize} /> : <FaAngleDoubleRight size={expandButtonSize} />}
        </Button>
      </HStack>
    </Box>
  );
}

const NavigationItem = ({
  label,
  children,
  placement = 'right',
}: {
  label: string;
  children: JSX.Element;
  placement?: Placement;
}) => {
  return (
    <Tooltip shouldWrapChildren={true} placement={placement} label={label} aria-label={label}>
      {children}
    </Tooltip>
  );
};

export { NavigationBar, NavigationItem };
