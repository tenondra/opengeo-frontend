import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberInput,
  NumberInputField,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC } from 'react';
import { SliderControlProps } from 'formik-chakra-ui';
import { ExtraParams } from 'yup/es/types';

export type CustomSliderControlProps = SliderControlProps & {
  validationSchema: any;
};

/*
 * A slider control with a label and values set from the validationSchema
 * */
export const CustomSliderControl: FC<CustomSliderControlProps> = (props: CustomSliderControlProps) => {
  const { name, label, sliderProps, sliderTrackProps, sliderThumbProps, validationSchema, ...rest } = props;
  const [field, meta, { setValue }] = useField(name);

  const min =
    validationSchema.fields[name]
      .describe()
      .tests.find((t: { name?: string | undefined; params: ExtraParams | undefined }) => t.name === 'min')?.params
      ?.min ?? 0;
  const max =
    validationSchema.fields[name]
      .describe()
      .tests.find((t: { name?: string | undefined; params: ExtraParams | undefined }) => t.name === 'max')?.params
      ?.max ?? 100;

  function handleChange(value: number) {
    setValue(value);
  }

  // Does not behave like expected, so we manually handle it.
  function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
    (e.target as any).name = name;
    field.onBlur(e);
  }

  return (
    <FormControl name={name} isInvalid={meta.error !== undefined} {...rest}>
      <Flex justify={'space-between'} paddingBottom={'.5em'}>
        <FormLabel maxW={'70%'} htmlFor={name}>
          {label}
        </FormLabel>
        <NumberInput
          allowMouseWheel
          defaultValue={meta.initialValue}
          {...field}
          min={min}
          max={max}
          onChange={(_, v) => handleChange(v)}
          name={name}
          maxW={'30%'}
          minW={'5em'}
        >
          <NumberInputField textAlign={'end'} paddingRight={'.5rem'} />
        </NumberInput>
      </Flex>
      <Slider
        {...field}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        min={min}
        max={max}
        isDisabled={rest.isDisabled}
        focusThumbOnChange={false}
        {...sliderProps}
      >
        <SliderTrack {...sliderTrackProps}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb {...sliderThumbProps} />
      </Slider>
      <FormErrorMessage>{meta.error?.replace(field.name, label ?? 'field')}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomSliderControl;
