import React, { forwardRef } from 'react';
import { Stack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

/*
 * Button for switching color modes
 * */
export const ColorModeSwitcher = forwardRef((props: any, ref) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  console.log(colorMode);

  return (
    <Stack
      as="button"
      ref={ref}
      size={props.size ? undefined : "md"}
      fontSize={props.size ? undefined : "lg"}
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      layerStyle="coloredHoverButton"
      onClick={() => {
        toggleColorMode();
        console.log("TOGGLE");
      }}
      _focus={{}}
      {...props}
    >
      <SwitchIcon size={props.size} />
    </Stack>
  );
});
