import { ViewStyle } from "react-native";
import { ViewProps } from "react-native";
import { stringToNumber } from "./onlyNumber";
export function handleBackfaceVisibilityProperty(
  value: string
): ViewStyle["backfaceVisibility"] | undefined {
  const allowedValues: ViewStyle["backfaceVisibility"][] = [
    "visible",
    "hidden",
  ];
  return allowedValues.includes(value as ViewStyle["backfaceVisibility"])
    ? (value as ViewStyle["backfaceVisibility"])
    : undefined;
}

export function handleBackgroundColorProperty(
  value: string
): ViewStyle["backgroundColor"] | undefined {
  return value;
}

export function handleBorderColorProperty(
  value: string
): ViewStyle["borderColor"] | undefined {
  return value;
}

export function handleBorderStyleProperty(
  value: string
): ViewStyle["borderStyle"] | undefined {
  const allowedValues: ViewStyle["borderStyle"][] = [
    "solid",
    "dotted",
    "dashed",
  ];
  return allowedValues.includes(value as ViewStyle["borderStyle"])
    ? (value as ViewStyle["borderStyle"])
    : undefined;
}

export function handleBorderWidthProperty(
  value: string
): ViewStyle["borderWidth"] | undefined {
  return stringToNumber(value);
}

export function handleElevationProperty(
  value: string
): ViewStyle["elevation"] | undefined {
  return stringToNumber(value);
}

export function handleOpacityProperty(
  value: string
): ViewStyle["opacity"] | undefined {
  return stringToNumber(value);
}

export function handlePointerEventsProperty(
  value: string
): ViewProps["pointerEvents"] | undefined {
  const allowedValues: ViewProps["pointerEvents"][] = [
    "auto",
    "box-none",
    "box-only",
    "none",
  ];
  return allowedValues.includes(value as ViewProps["pointerEvents"])
    ? (value as ViewProps["pointerEvents"])
    : undefined;
}

// Add more View style-related property handlers if needed

export function viewStylesHandler(
  property: string,
  value: string
): ViewStyle[keyof ViewStyle] | undefined {
  switch (property) {
    case "backfaceVisibility":
      return handleBackfaceVisibilityProperty(value);
    case "backgroundColor":
      return handleBackgroundColorProperty(value);
    case "borderColor":
      return handleBorderColorProperty(value);
    case "borderStyle":
      return handleBorderStyleProperty(value);
    case "borderWidth":
      return handleBorderWidthProperty(value);
    case "elevation":
      return handleElevationProperty(value);
    case "opacity":
      return handleOpacityProperty(value);
    case "pointerEvents":
      return handlePointerEventsProperty(value);
    default:
      return undefined;
  }
}
