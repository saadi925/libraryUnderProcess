import { TextStyle } from "react-native";

export function handleFontSizeProperty(value: string): number | undefined {
  const numericValue = parseFloat(value);
  if (!isNaN(numericValue)) {
    return numericValue;
  } else {
    return undefined;
  }
}

export function handleFontStyleProperty(
  value: string
): TextStyle["fontStyle"] | undefined {
  return value === "italic" ? "italic" : undefined;
}

export function handleFontWeightProperty(
  value: string
): TextStyle["fontWeight"] | undefined {
  const allowedValues: TextStyle["fontWeight"][] = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];
  return allowedValues.includes(value as TextStyle["fontWeight"])
    ? (value as TextStyle["fontWeight"])
    : undefined;
}

// Add more font-related property handlers if needed
