import React from 'react';
import { extendTheme, SystemStyleObjectRecord, ThemeComponents, withDefaultColorScheme } from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';
import { mode, Styles } from '@chakra-ui/theme-tools';
import { colorSchemeVar } from '../Utils/Cache';
import { expandButtonSize, expandedSidebarSize, NEGATIVE_COLOR_SCHEME, sidebarSize } from '../Utils/theme';
import { useReactiveVar } from '@apollo/client';

export const DynamicColorMode = (props: any) => {
  const colorScheme = useReactiveVar(colorSchemeVar);

  const styles: Styles = {
    // This styles the application components
    global: props => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
    }),
  };

  const components: ThemeComponents = {
    Button: {
      baseStyle: {
        paddingX: 5,
        paddingY: 6,
      },
      variants: {
        solid: {
          fontSize: 'x-large',
        },
        outline: {
          fontSize: 'x-large',
        },
      },
    },
    Table: {
      baseStyle: {
        td: {
          '.chakra-ui-dark &': {
            borderColor: theme => theme.colors[colorScheme][100],
          },
          '.chakra-ui-light &': {
            borderColor: theme => theme.colors[colorScheme][600],
          },
        },
        th: {
          '.chakra-ui-dark &': {
            borderColor: theme => theme.colors[colorScheme][200],
          },
          '.chakra-ui-light &': {
            borderColor: theme => theme.colors[colorScheme][700],
          },
        },
      },
    },
    Badge: {
      defaultProps: {
        variant: 'solid',
      },
      variants: {
        solid: {
          fontSize: 'lg',
          '.chakra-ui-dark &': {
            bgColor: theme => theme.colors[colorScheme][500],
          },
          '.chakra-ui-light &': {
            bgColor: theme => theme.colors[colorScheme][300],
            textColor: 'gray.700',
          },
        },
      },
    },
    Divider: {
      baseStyle: {
        borderColor: 'gray.500',
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
          layerStyle: 'coloredHoverButton',
        },
      },
    },
    IconType: {
      baseStyle: {
        textColor: 'red.200',
      },
    },
  };

  const navbarStyles: SystemStyleObjectRecord = {
    collapsedNav: {
      '.chakra-ui-dark &': {
        bgColor: 'gray.900',
      },
      '.chakra-ui-light &': {
        bgColor: 'gray.200',
      },
      height: '100%',
      width: sidebarSize,
      paddingY: '1rem',
      paddingX: '.5rem',
      autoRows: '1fr',
      columns: 1,
    },
    expandedNav: {
      '.chakra-ui-dark &': {
        bgColor: 'gray.900',
      },
      '.chakra-ui-light &': {
        bgColor: 'gray.200',
      },
      height: '100%',
      width: expandedSidebarSize,
      maxW: '25vw',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.8rem',
    },
    navbarPlaceholder: {
      width: sidebarSize,
    },
    navbarExpandButton: {
      _hover: { bgColor: 'rgba(0, 0, 0, 0.1)' },
      height: '100%',
      outline: 0,
      minWidth: expandButtonSize,
      maxWidth: expandButtonSize,
      padding: '.1em',
    },
  };

  const listStyles: SystemStyleObjectRecord = {
    list: {
      columns: 1,
      layerStyle: 'contentBox',
    },
    listItem: {
      // An entry in a list
      shadow: 'lg',
      w: '100%',
      '.chakra-ui-dark &': {
        bg: 'gray.700',
      },
      '.chakra-ui-light &': {
        bg: 'gray.200',
      },
      p: 5,
      rounded: 'md',
      borderWidth: 'thin',
      borderColor: 'transparent',
      _hover: {
        borderColor: theme => theme.colors[colorScheme][300],
      },
      transition: '150ms ease-in-out',
    },
    listColumn: {
      // Set to list subEntries to allow horizontal alignment of columns in list
      flexDirection: 'column',
    },
    listItemColumns: {
      // Container with the columns of a list entry
      gap: 4,
      p: 2,
    },
    firstColumn: {
      // First column in a list entry
      textAlign: 'start',
    },
    middleColumn: {
      // 2..n-1th column in a list entry with n columns
      textAlign: 'center',
    },
    lastColumn: {
      // Last column in a list entry
      textAlign: 'end',
    },
  };

  const buttonStyles: SystemStyleObjectRecord = {
    coloredButton: {
      // Button with colored transition
      '.chakra-ui-dark &': {
        textColor: theme => theme.colors[colorScheme][500],
      },
      '.chakra-ui-light &': {
        textColor: theme => theme.colors[colorScheme][400],
      },
    },
    coloredHoverButton: {
      // Button with colored transition
      _hover: {
        '.chakra-ui-dark &': {
          textColor: theme => theme.colors[colorScheme][400],
        },
        '.chakra-ui-light &': {
          textColor: theme => theme.colors[colorScheme][500],
        },
      },
      transition: '150ms ease-in-out',
    },
    negativeTextButton: {
      // Negative color scheme
      '.chakra-ui-dark &': {
        textColor: theme => theme.colors[NEGATIVE_COLOR_SCHEME][300],
      },
      '.chakra-ui-light &': {
        textColor: theme => theme.colors[NEGATIVE_COLOR_SCHEME][300],
      },
      _hover: {
        '.chakra-ui-dark &': {
          textColor: theme => theme.colors[NEGATIVE_COLOR_SCHEME][500],
        },
        '.chakra-ui-light &': {
          textColor: theme => theme.colors[NEGATIVE_COLOR_SCHEME][400],
        },
      },
      transition: '150ms ease-in-out',
    },
    kickButton: {
      // A small button
      fontSize: 'small',
      paddingX: 0,
      paddingY: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      _hover: {
        bgColor: theme => theme.colors[NEGATIVE_COLOR_SCHEME][400],
      },
      transition: '150ms ease-in-out',
    },
  };

  const layerStyles: SystemStyleObjectRecord = {
    // All applicable styles to any components based on layerStyle (an alternative to BEM class based CSS)
    // All colors are defined for the light theme, to define dark theme colors
    //    see: https://github.com/chakra-ui/chakra-ui/issues/2231\
    //    please use '.chakra-ui-dark &': {...} AND '.chakra-ui-light &': {...} to explicitly style colors (avoids misunderstandings)
    verticalForm: {
      borderSpacing: 5,
      w: '100%',
    },
    verticalContainer: {
      // A vertically oriented container that takes up all the available space
      borderSpacing: 5,
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100%',
      p: 3,
      flexDirection: 'column',
    },
    contentBox: {
      // Simple container that has max width
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    verticalBox: {
      // Set to allow horizontal alignment of content
      flexDirection: 'column',
    },
    singleLineEllipsis: {
      // Text that spans only one line and uses ellipsis as overflow
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    hStack: {
      // Horizontal stack with even distribution
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingTop: 2,
    },
    topBar: {
      // Colored bar at the top
      justify: 'space-between',
      alignItems: 'center',
      '.chakra-ui-dark &': {
        bgColor: theme => theme.colors[colorScheme][500],
      },
      '.chakra-ui-light &': {
        bgColor: theme => theme.colors[colorScheme][300],
      },
      p: 1,
      position: 'relative',
      direction: 'row',
      zIndex: 10,
    },
    locationSwitchButtons: {
      '::-webkit-scrollbar': {
        height: '6px',
      },
      '::-webkit-scrollbar-track': {
        background: '#c4c4c4',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
      maxWidth: '90vw',
      overflowX: 'auto',
      padding: 5,
    },
    ...buttonStyles,
    ...listStyles,
    ...navbarStyles,
  };
  const textStyles: SystemStyleObjectRecord = {
    // Does not work at the moment, see https://github.com/chakra-ui/chakra-ui/issues/3884
    heading: {
      fontSize: '2xl',
    },
    subHeading: {
      fontSize: 'lg',
      fontWeight: 'thin',
    },
  };

  const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: colorScheme }), {
    config: {
      useSystemColorMode: true,
      initialColorMode: 'dark',
    },
    components,
    styles,
    layerStyles,
    textStyles,
  });

  return <ThemeProvider {...props} theme={customTheme} />;
};
