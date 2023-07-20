import { parseDynamicValue } from "./DynamicValueParser";
import { handleFontStyleProperty, handleFontWeightProperty } from "./FontUtils";
import {
  handleMarginProperty,
  handlePaddingProperty,
} from "./MarginPaddinUtiliity";
import { getPropertyFromShorthand } from "./ShortHandProperty";
import {
  handleColorProperty,
  handleTextAlignProperty,
  handleTextProperties,
} from "./TextUtils";
export {
  parseDynamicValue,
  getPropertyFromShorthand,
  handleMarginProperty,
  handlePaddingProperty,
  handleFontStyleProperty,
  handleFontWeightProperty,
  handleColorProperty,
  handleTextAlignProperty,
  handleTextProperties,
};
