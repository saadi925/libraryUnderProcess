import { TextStyle } from "react-native";
import { handleFontStyleProperty, handleFontWeightProperty } from "./FontUtils";
import { stringToNumber } from "./onlyNumber";

export function handleColorProperty(
  value: string
): TextStyle["color"] | undefined {
  return value;
}
export function handleLineHeightProperty(
  value: string
): TextStyle["lineHeight"] | undefined {
  return stringToNumber(value);
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

export function handleIncludeFontPaddingProperty(
  value: string
): TextStyle["includeFontPadding"] | undefined {
  return value === "false" ? false : undefined;
}

type FontVariant =
  | "small-caps"
  | "oldstyle-nums"
  | "lining-nums"
  | "tabular-nums"
  | "proportional-nums";

export function handleFontVariantProperty(
  value: string
): TextStyle["fontVariant"] | undefined {
  const variants = value.split(" ");
  const allowedValues: FontVariant[] = [
    "small-caps",
    "oldstyle-nums",
    "lining-nums",
    "tabular-nums",
    "proportional-nums",
  ];
  const validVariants = variants.filter((variant) =>
    allowedValues.includes(variant as FontVariant)
  ) as FontVariant[];
  return validVariants.length > 0 ? validVariants : undefined;
}

export function handleTextAlignVerticalProperty(
  value: string
): TextStyle["textAlignVertical"] | undefined {
  const allowedValues: TextStyle["textAlignVertical"][] = [
    "auto",
    "top",
    "bottom",
    "center",
  ];
  return allowedValues.includes(value as TextStyle["textAlignVertical"])
    ? (value as TextStyle["textAlignVertical"])
    : undefined;
}

export function handleTextDecorationColorProperty(
  value: string
): TextStyle["textDecorationColor"] | undefined {
  return handleColorProperty(value);
}

export function handleTextDecorationLineProperty(
  value: string
): TextStyle["textDecorationLine"] | undefined {
  const allowedValues: TextStyle["textDecorationLine"][] = [
    "none",
    "underline",
    "line-through",
    "underline line-through",
  ];
  return allowedValues.includes(value as TextStyle["textDecorationLine"])
    ? (value as TextStyle["textDecorationLine"])
    : undefined;
}

export function handleTextDecorationStyleProperty(
  value: string
): TextStyle["textDecorationStyle"] | undefined {
  const allowedValues: TextStyle["textDecorationStyle"][] = [
    "solid",
    "double",
    "dotted",
    "dashed",
  ];
  return allowedValues.includes(value as TextStyle["textDecorationStyle"])
    ? (value as TextStyle["textDecorationStyle"])
    : undefined;
}

export function handleTextShadowColorProperty(
  value: string
): TextStyle["textShadowColor"] | undefined {
  return handleColorProperty(value);
}
export function handleWritingDirectionProperty(
  value: string
): TextStyle["writingDirection"] | undefined {
  const allowedValues: TextStyle["writingDirection"][] = ["auto", "ltr", "rtl"];
  return allowedValues.includes(value as TextStyle["writingDirection"])
    ? (value as TextStyle["writingDirection"])
    : undefined;
}
export function handleTextShadowOffset(
  value: string
): TextStyle["textShadowOffset"] | undefined {
  const offsetValues = value.split(",");
  console.log(offsetValues);

  const width = parseFloat(offsetValues[0]);
  const height = parseFloat(offsetValues[1]);
  if (!isNaN(width) && !isNaN(height)) {
    return {
      width,
      height,
    };
  } else {
    console.error("Either Width or Height is not a number");
    return undefined;
  }
}

export function handleTextProperties(
  property: string,
  value: string
): TextStyle[keyof TextStyle] | undefined {
  switch (property) {
    case "textAlign":
      return handleTextAlignProperty(value);
    case "letterSpacing":
      return stringToNumber(value);
    case "fontWeight":
      return handleFontWeightProperty(value);
    case "fontStyle":
      return handleFontStyleProperty(value);
    case "fontSize":
      return stringToNumber(value);
    case "lineHeight":
      return handleLineHeightProperty(value);
    case "color":
      return handleColorProperty(value);
    case "textDecorationColor":
      return handleTextDecorationColorProperty(value);
    case "textDecorationLine":
      return handleTextDecorationLineProperty(value);
    case "textDecorationStyle":
      return handleTextDecorationStyleProperty(value);
    case "textShadowColor":
      return handleTextShadowColorProperty(value);
    case "textAlignVertical":
      return handleTextAlignVerticalProperty(value);
    case "writingDirection":
      return handleWritingDirectionProperty(value);
    case "textShadowRadius":
      return stringToNumber(value);
    case "textShadowOffset":
      return handleTextShadowOffset(value);
    default:
      return undefined;
  }
}
