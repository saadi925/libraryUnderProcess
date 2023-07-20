import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { getPropertyFromShorthand, parseDynamicValue } from "./utility";
import {
  handleMarginProperty,
  handlePaddingProperty,
  handleTextProperties,
} from "./utility";
import { viewStylesHandler } from "./utility/ViewStylesUtils";
import { handleTextShadowOffset } from "./utility/TextUtils";
import { stringToNumber } from "./utility/onlyNumber";

type UtilityStyle = ViewStyle | TextStyle | ImageStyle;
type StyleRules = Record<string, { id: string; style: UtilityStyle }>;

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
  private generateUniqueId(): string {
    return `style_${Math.random().toString(36).substr(2, 9)}`;
  }

  public addStyle(className: string, style: UtilityStyle) {
    if (!this.styleSet.has(className)) {
      const id = this.generateUniqueId();
      const styleWithId = { id, style };
      this.styles[className] = styleWithId;
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
            const numValue = stringToNumber(value);
            if (numValue !== undefined) {
              generatedStyles[styleProperty] = numValue;
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
            const flexValue = stringToNumber(value);
            if (flexValue !== undefined) {
              generatedStyles[styleProperty] = flexValue;
            }
            break;

          default:
            generatedStyles[styleProperty] = value;
            break;
        }
      } else {
        const style = this.styles[className];
        if (style) {
          Object.assign(generatedStyles, style.style);
        }
      }
    }

    return generatedStyles;
  }
}

export default CSSUtility;
