import { parseDynamicValue } from "./DynamicValueParser";
import {
  handleFontSizeProperty,
  handleFontStyleProperty,
  handleFontWeightProperty,
} from "./FontUtils";
import {
  handleMarginProperty,
  handlePaddingProperty,
} from "./MarginPaddinUtiliity";
import { getPropertyFromShorthand } from "./ShortHandProperty";
import { handleColorProperty, handleTextAlignProperty } from "./TextUtils";
export {
  parseDynamicValue,
  getPropertyFromShorthand,
  handleMarginProperty,
  handlePaddingProperty,
  handleFontSizeProperty,
  handleFontStyleProperty,
  handleFontWeightProperty,
  handleColorProperty,
  handleTextAlignProperty,
};
