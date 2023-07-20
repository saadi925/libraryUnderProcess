import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { getPropertyFromShorthand, parseDynamicValue } from "./utility";
import {
  handleMarginProperty,
  handlePaddingProperty,
  handleFlexProperty,
  handleTextProperties,
} from "./utility";
import { viewStylesHandler } from "./utility/ViewStylesUtils";
import { handleTextShadowOffset } from "./utility/TextUtils";

type StyleRules = Record<string, ViewStyle | TextStyle | ImageStyle>;
type UtilityStyle = ViewStyle | TextStyle | ImageStyle;

class CSSUtility {
  private static instance: CSSUtility;
  private styles: StyleRules = {};
  private styleSet: Set<string> = new Set();

  private constructor() {}

  public static getInstance(): CSSUtility {
    if (!CSSUtility.instance) {
      CSSUtility.instance = new CSSUtility();
    }
    return CSSUtility.instance;
  }

  public addStyle(className: string, style: UtilityStyle) {
    if (!this.styleSet.has(className)) {
      this.styles[className] = style;
      this.styleSet.add(className);
    }
  }

  public generateStyles(...classNames: string[]): UtilityStyle {
    const generatedStyles: UtilityStyle = {};

    for (const className of classNames) {
      const [property, value] = className.split(":");
      if (property && value) {
        const styleProperty = getPropertyFromShorthand(property);
        if (!styleProperty) continue;

        switch (styleProperty) {
            switch (styleProperty) {
                case "position":
                  const positionValue: "absolute" | "relative" = value as
                    | "absolute"
                    | "relative";
                  generatedStyles[property] = positionValue;
                  break;
      
                case "margin":
                case "marginTop":
                case "marginBottom":
                case "marginLeft":
                case "marginRight":
                case "marginVertical":
                case "marginHorizontal":
                  const marginValue = handleMarginProperty(value);
                  if (marginValue !== undefined) {
                    generatedStyles[styleProperty] = marginValue;
                  }
                  break;
      
                case "padding":
                case "paddingTop":
                case "paddingBottom":
                case "paddingLeft":
                case "paddingRight":
                case "paddingVertical":
                case "paddingHorizontal":
                  const paddingValue = handlePaddingProperty(value);
                  if (paddingValue !== undefined) {
                    generatedStyles[styleProperty] = paddingValue;
                  }
                  break;
      
                case "textShadowOffset":
                  const textShadowOffsetValue = handleTextShadowOffset(value);
                  if (textShadowOffsetValue !== undefined) {
                    generatedStyles[styleProperty] = textShadowOffsetValue;
                  }
                  break;
      
                case "textAlign":
                case "fontWeight":
                case "fontSize":
                case "fontStyle":
                case "letterSpacing":
                case "lineHeight":
                case "color":
                case "textDecorationColor":
                case "textDecorationLine":
                case "textDecorationStyle":
                case "textShadowRadius":
                case "textShadowColor":
                case "textAlignVertical":
                case "writingDirection":
                  const textPropertyValue = handleTextProperties(
                    styleProperty,
                    value
                  );
                  if (textPropertyValue !== undefined) {
                    generatedStyles[styleProperty] = textPropertyValue;
                  }
                  break;
      
                case "width":
                case "maxWidth":
                case "minWidth":
                case "height":
                case "minHeight":
                case "maxHeight":
                  generatedStyles[styleProperty] = parseDynamicValue(value);
                  break;
      
                case "borderWidth":
                case "borderRadius":
                case "borderTopLeftRadius":
                case "borderTopRightRadius":
                case "borderBottomLeftRadius":
                case "borderBottomRightRadius":
                case "opacity":
                  const numericValue = parseFloat(value);
                  if (!isNaN(numericValue)) {
                    generatedStyles[styleProperty] = numericValue;
                  }
                  break;
      
                case "backfaceVisibility":
                case "backgroundColor":
                case "borderColor":
                case "borderStyle":
                case "borderWidth":
                case "elevation":
                case "opacity":
                case "pointerEvents":
                  const viewStyleProperty = viewStylesHandler(styleProperty, value);
                  if (viewStyleProperty !== undefined) {
                    generatedStyles[styleProperty] = viewStyleProperty;
                  }
                  break;
      
                case "flex":
                case "flexGrow":
                case "flexShrink":
                case "rowGap":
                case "gap":
                case "columnGap":
                  const flexValue = handleFlexProperty(value);
                  if (flexValue !== undefined) {
                    generatedStyles[styleProperty] = flexValue;
                  }
                  break;
      
                default:
                  generatedStyles[styleProperty] = value;
                  break;
              }
        }
      } else {
        const style = this.styles[className];
        if (style) {
          Object.assign(generatedStyles, style);
        }
      }
    }

    return generatedStyles;
  }
}

export default CSSUtility;
