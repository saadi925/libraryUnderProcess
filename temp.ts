// import { ViewStyle, TextStyle } from "react-native";
// import { getPropertyFromShorthand, parseDynamicValue } from "./utility";

// type StyleRules = Record<string, ViewStyle | TextStyle>;
// type UtilityStyle = ViewStyle | TextStyle;

// class CSSUtility {
//   private static instance: CSSUtility;
//   private styles: StyleRules = {};

//   private constructor() {}

//   public static getInstance(): CSSUtility {
//     if (!CSSUtility.instance) {
//       CSSUtility.instance = new CSSUtility();
//     }
//     return CSSUtility.instance;
//   }

//   public addStyle(className: string, style: ViewStyle | TextStyle) {
//     this.styles[className] = style;
//   }

//   public generateStyles(...classNames: string[]): UtilityStyle {
//     const generatedStyles: UtilityStyle = {};

//     classNames.forEach((className) => {
//       const [property, value] = className.split(":");
//       if (property && value) {
//         if (property === "position") {
//           const positionValue: "absolute" | "relative" = value as
//             | "absolute"
//             | "relative";
//           generatedStyles[property] = positionValue;
//         } else {
//           const styleProperty = getPropertyFromShorthand(property);
//           if (styleProperty) {
//             if (styleProperty === "flex") {
//               generatedStyles.flex = parseInt(value, 10);
//             } else if (
//               styleProperty === "top" ||
//               styleProperty === "bottom" ||
//               styleProperty === "left" ||
//               styleProperty === "right"
//             ) {
//               generatedStyles[styleProperty] = parseDynamicValue(value);
//             } else if (
//               styleProperty === "width" ||
//               styleProperty === "height"
//             ) {
//               generatedStyles[styleProperty] = parseDynamicValue(value);
//             } else if (property === "fontSize") {
//               generatedStyles[property] = parseInt(value, 10);
//             } else if (
//               styleProperty === "marginTop" ||
//               styleProperty === "marginBottom" ||
//               styleProperty === "marginLeft" ||
//               styleProperty === "marginRight" ||
//               styleProperty === "paddingTop" ||
//               styleProperty === "paddingBottom" ||
//               styleProperty === "paddingLeft" ||
//               styleProperty === "paddingRight" ||
//               styleProperty === "paddingVertical" ||
//               styleProperty === "paddingHorizontal" ||
//               styleProperty === "marginVertical" ||
//               styleProperty === "marginHorizontal"
//             ) {
//               generatedStyles[styleProperty] = parseDynamicValue(value);
//             } else if (styleProperty === "paddingVertical") {
//               const numericValue = parseDynamicValue(value);
//               generatedStyles.paddingTop = numericValue;
//               generatedStyles.paddingBottom = numericValue;
//             } else if (styleProperty === "paddingHorizontal") {
//               const numericValue = parseDynamicValue(value);
//               generatedStyles.paddingLeft = numericValue;
//               generatedStyles.paddingRight = numericValue;
//             } else if (styleProperty === "marginVertical") {
//               const numericValue = parseDynamicValue(value);
//               generatedStyles.marginTop = numericValue;
//               generatedStyles.marginBottom = numericValue;
//             } else if (styleProperty === "marginHorizontal") {
//               const numericValue = parseDynamicValue(value);
//               generatedStyles.marginLeft = numericValue;
//               generatedStyles.marginRight = numericValue;
//             } else if (styleProperty === "color") {
//               generatedStyles[styleProperty] = value;
//             } else if (styleProperty === "fontFamily") {
//               generatedStyles[styleProperty] = value;
//             } else if (styleProperty === "fontSize") {
//               generatedStyles[styleProperty] = parseInt(value, 10);
//             } else if (styleProperty === "fontStyle") {
//               generatedStyles[styleProperty] = value as "normal" | "italic";
//             } else if (styleProperty === "fontWeight") {
//               generatedStyles[styleProperty] = value;
//             } else if (styleProperty === "includeFontPadding") {
//               generatedStyles[styleProperty] = value === "false" ? false : true;
//             } else if (styleProperty === "fontVariant") {
//               generatedStyles[styleProperty] = value.split(" ");
//             } else if (styleProperty === "letterSpacing") {
//               generatedStyles[styleProperty] = parseFloat(value);
//             } else if (styleProperty === "lineHeight") {
//               generatedStyles[styleProperty] = parseFloat(value);
//             } else if (styleProperty === "textAlign") {
//               generatedStyles[styleProperty] = value as
//                 | "auto"
//                 | "left"
//                 | "right"
//                 | "center"
//                 | "justify";
//             } else if (styleProperty === "textAlignVertical") {
//               generatedStyles[styleProperty] = value as
//                 | "auto"
//                 | "top"
//                 | "bottom"
//                 | "center";
//             } else if (styleProperty === "textDecorationColor") {
//               generatedStyles[styleProperty] = value;
//             } else if (styleProperty === "textDecorationLine") {
//               generatedStyles[styleProperty] = value;
//             } else if (styleProperty === "textDecorationStyle") {
//               generatedStyles[styleProperty] = value;
//             } else if (styleProperty === "textShadowColor") {
//               generatedStyles[styleProperty] = value;
//             } else if (styleProperty === "textShadowOffset") {
//               generatedStyles[styleProperty] = JSON.parse(value);
//             } else if (styleProperty === "textShadowRadius") {
//               generatedStyles[styleProperty] = parseFloat(value);
//             } else if (styleProperty === "textTransform") {
//               generatedStyles[styleProperty] = value as
//                 | "none"
//                 | "uppercase"
//                 | "lowercase"
//                 | "capitalize";
//             } else if (styleProperty === "verticalAlign") {
//               generatedStyles[styleProperty] = value as
//                 | "auto"
//                 | "top"
//                 | "bottom"
//                 | "middle";
//             } else if (styleProperty === "writingDirection") {
//               generatedStyles[styleProperty] = value as "auto" | "ltr" | "rtl";
//             } else {
//               generatedStyles[styleProperty] = value;
//             }
//           }
//         }
//       } else {
//         const style = this.styles[className];
//         if (style) {
//           Object.assign(generatedStyles, style);
//         }
//       }
//     });

//     return generatedStyles;
//   }
// }

// export default CSSUtility;
