import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/layout";
import { NEGATIVE_COLOR_SCHEME } from "../Utils/theme";

/*
 * Used for showing time in the countdown
 * */
export default function RenderTime(props: {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: string | number;
}) {
  return (
    <Heading size={props.total <= 10 ? "2xl" : "lg"} color={props.total <= 10 ? NEGATIVE_COLOR_SCHEME : undefined}>
      {props.days * 24 * 60 + props.hours * 60 + props.minutes + ":" + (props.seconds < 10 ? "0" : "") + props.seconds}
    </Heading>
  );
}

RenderTime.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  total: PropTypes.number || PropTypes.string
};
