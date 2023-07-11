import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { getPropertyFromShorthand, parseDynamicValue } from "./utility";
import {
  handleMarginProperty,
  handlePaddingProperty,
  handleFontSizeProperty,
  handleFontStyleProperty,
  handleFontWeightProperty,
  handleColorProperty,
  handleTextAlignProperty,
} from "./utility";
import { handleFlexProperty } from "./utility/FlexUtils";

type StyleRules = Record<string, ViewStyle | TextStyle | ImageStyle>;
type UtilityStyle = ViewStyle | TextStyle | ImageStyle;

class CSSUtility {
  private static instance: CSSUtility;
  private styles: StyleRules = {};

  private constructor() {}

  public static getInstance(): CSSUtility {
    if (!CSSUtility.instance) {
      CSSUtility.instance = new CSSUtility();
    }
    return CSSUtility.instance;
  }

  public addStyle(
    className: string,
    style: ViewStyle | TextStyle | ImageStyle
  ) {
    this.styles[className] = style;
  }

  public generateStyles(...classNames: string[]): UtilityStyle {
    const generatedStyles: UtilityStyle = {};

    classNames.forEach((className) => {
      const [property, value] = className.split(":");
      if (property && value) {
        if (property === "position") {
          const positionValue: "absolute" | "relative" = value as
            | "absolute"
            | "relative";
          generatedStyles[property] = positionValue;
        } else {
          const styleProperty = getPropertyFromShorthand(property);
          if (styleProperty) {
            if (
              styleProperty === "margin" ||
              styleProperty === "padding" ||
              styleProperty === "marginTop" ||
              styleProperty === "marginBottom" ||
              styleProperty === "marginLeft" ||
              styleProperty === "marginRight" ||
              styleProperty === "paddingTop" ||
              styleProperty === "paddingBottom" ||
              styleProperty === "paddingLeft" ||
              styleProperty === "paddingRight" ||
              styleProperty === "paddingVertical" ||
              styleProperty === "paddingHorizontal" ||
              styleProperty === "marginVertical" ||
              styleProperty === "marginHorizontal"
            ) {
              const handler =
                styleProperty === "margin" ||
                styleProperty === "marginTop" ||
                styleProperty === "marginLeft" ||
                styleProperty === "marginRight" ||
                styleProperty === "marginBottom" ||
                styleProperty === "marginVertical" ||
                styleProperty === "marginHorizontal"
                  ? handleMarginProperty
                  : handlePaddingProperty;
              const numericValue = handler(value);
              if (numericValue !== undefined) {
                generatedStyles[styleProperty] = numericValue;
              }
            } else if (
              styleProperty === "width" ||
              styleProperty === "maxWidth" ||
              styleProperty === "minWidth" ||
              styleProperty === "height" ||
              styleProperty === "minHeight" ||
              styleProperty === "maxHeight"
            ) {
              generatedStyles[styleProperty] = parseDynamicValue(value);
            } else if (
              styleProperty === "borderWidth" ||
              styleProperty === "borderRadius" ||
              styleProperty === "borderTopLeftRadius" ||
              styleProperty === "borderTopRightRadius" ||
              styleProperty === "borderBottomLeftRadius" ||
              styleProperty === "borderBottomRightRadius" ||
              styleProperty === "opacity"
            ) {
              const numericValue = parseFloat(value);
              if (!isNaN(numericValue)) {
                generatedStyles[styleProperty] = numericValue;
              }
            } else if (styleProperty === "fontSize") {
              const numericValue = handleFontSizeProperty(value);
              if (numericValue !== undefined) {
                generatedStyles[styleProperty] = numericValue;
              }
            } else if (styleProperty === "fontStyle") {
              const fontStyleValue = handleFontStyleProperty(value);
              if (fontStyleValue !== undefined) {
                generatedStyles[styleProperty] = fontStyleValue;
              }
            } else if (styleProperty === "fontWeight") {
              const fontWeightValue = handleFontWeightProperty(value);
              if (fontWeightValue !== undefined) {
                generatedStyles[styleProperty] = fontWeightValue;
              }
            } else if (styleProperty === "color") {
              const colorValue = handleColorProperty(value);
              if (colorValue !== undefined) {
                generatedStyles[styleProperty] = colorValue;
              }
            } else if (styleProperty === "textAlign") {
              const textAlignValue = handleTextAlignProperty(value);
              if (textAlignValue !== undefined) {
                generatedStyles[styleProperty] = textAlignValue;
              }
            } else if (
              styleProperty === "flex" ||
              styleProperty === "flexGrow" ||
              styleProperty === "flexShrink" ||
              styleProperty === "rowGap" ||
              styleProperty === "columnGap"
            ) {
              const flexValue = handleFlexProperty(value);
              if (flexValue !== undefined) {
                generatedStyles[styleProperty] = flexValue;
              }
            } else {
              generatedStyles[styleProperty] = value;
            }
          }
        }
      } else {
        const style = this.styles[className];
        if (style) {
          Object.assign(generatedStyles, style);
        }
      }
    });

    return generatedStyles;
  }
}

export default CSSUtility;
