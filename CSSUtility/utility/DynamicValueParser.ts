import { Dimensions, PixelRatio } from "react-native";

export function parseDynamicValue(value: string): string | number {
  if (value.endsWith("%")) {
    return value;
  } else if (value.endsWith("vw")) {
    const vwValue = value.replace("vw", "");
    const viewportWidth = Dimensions.get("window").width;
    const numericValue = parseFloat(vwValue);
    return (numericValue * viewportWidth) / 100;
  } else if (value.endsWith("vh")) {
    const vhValue = value.replace("vh", "");
    const viewportHeight = Dimensions.get("window").height;
    const numericValue = parseFloat(vhValue);
    return (numericValue * viewportHeight) / 100;
  } else if (value.endsWith("px")) {
    const pxValue = value.replace("px", "");
    return parseFloat(pxValue);
  } else if (value.endsWith("dp")) {
    const dpValue = value.replace("dp", "");
    const pixelValue = PixelRatio.getPixelSizeForLayoutSize(
      parseFloat(dpValue)
    );
    return pixelValue;
  } else {
    return parseFloat(value); // Convert value to number
  }
}
