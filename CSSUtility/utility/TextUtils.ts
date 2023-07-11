import { TextStyle } from "react-native";

export function handleColorProperty(
  value: string
): TextStyle["color"] | undefined {
  return value;
}

export function handleTextAlignProperty(
  value: string
): TextStyle["textAlign"] | undefined {
  const allowedValues: TextStyle["textAlign"][] = [
    "auto",
    "left",
    "right",
    "center",
    "justify",
  ];
  return allowedValues.includes(value as TextStyle["textAlign"])
    ? (value as TextStyle["textAlign"])
    : undefined;
}

// Add more text-related property handlers if needed
