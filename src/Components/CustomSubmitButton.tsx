import React, { FC } from "react";
import { useFormikContext } from "formik";
import { Button } from "@chakra-ui/react";
import { SubmitButtonProps } from "formik-chakra-ui/src/submit-button/index";

export const CustomSubmitButton: FC<SubmitButtonProps> = (
  props: SubmitButtonProps
) => {
  const { children, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <Button type="submit" isLoading={isSubmitting} {...rest}>
      {children}
    </Button>
  );
};

export default CustomSubmitButton;