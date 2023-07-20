import { ViewStyle } from "react-native";
import { stringToNumber } from "./onlyNumber";

export function handleMarginProperty(
  value: string
): ViewStyle["margin"] | undefined {
  return stringToNumber(value);
}

export function handlePaddingProperty(
  value: string
): ViewStyle["padding"] | undefined {
  return stringToNumber(value);
}
