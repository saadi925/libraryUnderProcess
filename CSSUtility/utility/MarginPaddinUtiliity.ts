import { ViewStyle } from "react-native";
import { parseDynamicValue } from "./DynamicValueParser";

export function handleMarginProperty(
  value: string
): ViewStyle["margin"] | undefined {
  const numericValue = parseDynamicValue(value);
  if (numericValue !== undefined) {
    return numericValue;
  } else {
    return undefined;
  }
}

export function handlePaddingProperty(
  value: string
): ViewStyle["padding"] | undefined {
  return handleMarginProperty(value);
}
