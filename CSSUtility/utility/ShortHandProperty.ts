export function getPropertyFromShorthand(property: string): string | undefined {
  switch (property) {
    case "m":
      return "margin";
    case "p":
      return "padding";
    case "pl":
      return "paddingLeft";
    case "pr":
      return "paddingRight";
    case "pt":
      return "paddingTop";
    case "pb":
      return "paddingBottom";
    case "ml":
      return "marginLeft";
    case "mr":
      return "marginRight";
    case "mt":
      return "marginTop";
    case "mb":
      return "marginBottom";
    case "pv":
      return "paddingVertical";
    case "ph":
      return "paddingHorizontal";
    case "mv":
      return "marginVertical";
    case "mh":
      return "marginHorizontal";
    case "w":
      return "width";
    case "minW":
      return "minWidth";
    case "maxW":
      return "maxWidth";
    case "h":
      return "height";
    case "maxH":
      return "maxHeight";
    case "minH":
      return "minHeight";
    case "jc":
      return "justifyContent";
    case "ai":
      return "alignItems";
    case "as":
      return "alignSelf";
    case "fd":
      return "flexDirection";
    case "tp":
      return "top";
    case "lt":
      return "left";
    case "rt":
      return "right";
    case "bt":
      return "bottom";
    case "bgColor":
      return "backgroundColor";
    case "textColor":
      return "color";
    case "tA":
      return "textAlign";
    case "fw":
      return "fontWeight";
    case "fS":
      return "fontSize";
    case "fStyle":
      return "fontStyle";
    case "fFamily":
      return "fontFamily";
    case "fVariant":
      return "fontVariant";
    case "lSpacing":
      return "letterSpacing";
    case "lHeight":
      return "lineHeight";
    case "tDecorationColor":
      return "textDecorationColor";
    case "tDecorationLine":
      return "textDecorationLine";
    case "tDecorationStyle":
      return "textDecorationStyle";
    case "tShadowColor":
      return "textShadowColor";
    case "tShadowOffset":
      return "textShadowOffset";
    case "tShadowRadius":
      return "textShadowRadius";
    case "tTransform":
      return "textTransform";
    case "vAlign":
      return "verticalAlign";
    case "wDirection":
      return "writingDirection";
    case "m":
      return "margin";
    case "backfaceVisibility":
      return "backfaceVisibility";
    case "backgroundColor":
      return "backgroundColor";
    case "borderBottomLeftRadius":
      return "borderBottomLeftRadius";
    case "borderBottomRightRadius":
      return "borderBottomRightRadius";
    case "borderColor":
      return "borderColor";
    case "borderRadius":
      return "borderRadius";
    case "borderTopLeftRadius":
      return "borderTopLeftRadius";
    case "borderTopRightRadius":
      return "borderTopRightRadius";
    case "borderWidth":
      return "borderWidth";
    case "opacity":
      return "opacity";
    case "overflow":
      return "overflow";
    case "overlayColor":
      return "overlayColor";
    case "resizeMode":
      return "resizeMode";
    case "objectFit":
      return "objectFit";
    case "tintColor":
      return "tintColor";
    default:
      return property;
  }
}
