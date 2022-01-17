import { Box, Divider, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomSliderControl from '../Components/CustomSliderControl';
import CustomSubmitButton from '../Components/CustomSubmitButton';

/*
 * Container with a form that allows game creation
 * */
export default function CreateGame({
  updateLobbyState,
  isOwner,
  canStart,
}: {
  updateLobbyState: (values: { limit: number; rounds: number; minDensity: number; maxDensity: number }) => void;
  isOwner: boolean;
  canStart: boolean;
}) {
  const minimumMinDensity = 10;
  const maximumMinDensity = 12000;
  const minimumMaxDensity = 100;
  const maximumMaxDensity = 20000;
  const maxTimeLimit = 12000;

  const validationSchema = Yup.object({
    rounds: Yup.number().required().max(20).min(1),
    limit: Yup.number().required().max(maxTimeLimit).min(10),
    minDensity: Yup.number().required().min(minimumMinDensity).max(maximumMinDensity),
    maxDensity: Yup.number().required().min(minimumMaxDensity).max(maximumMaxDensity).moreThan(Yup.ref("minDensity"))
  });

  return (
    <Formik
      initialValues={{ rounds: 5, limit: 90, minDensity: 50, maxDensity: 20000 }}
      validationSchema={validationSchema}
      onSubmit={values => updateLobbyState(values)}
    >
      {/* Form with settings of the game */}
      {({ handleSubmit }) => (
        <Box as="form" onSubmit={handleSubmit as any}>
          <VStack layerStyle="verticalForm" spacing={5}>
            <CustomSliderControl
              name="rounds"
              label="Number of rounds"
              isDisabled={!isOwner}
              validationSchema={validationSchema}
            />
            <Divider />
            <CustomSliderControl
              name="limit"
              label="Time limit per round"
              isDisabled={!isOwner}
              validationSchema={validationSchema}
            />
            <Divider />
            <CustomSliderControl
              name="minDensity"
              label="Minimum population density"
              isDisabled={!isOwner}
              validationSchema={validationSchema}
            />
            <Divider />
            <CustomSliderControl
              name="maxDensity"
              label="Maximum population density"
              isDisabled={!isOwner}
              validationSchema={validationSchema}
            />
            {isOwner && <CustomSubmitButton isDisabled={isOwner && !canStart}>Start</CustomSubmitButton>}
          </VStack>
        </Box>
      )}
    </Formik>
  );
}
