import CSSUtility from "./CSSUtility/CSSUtility";

const cssUtil = CSSUtility.getInstance();

import defaultStyles from "./defaultStyles";

Object.entries(defaultStyles).forEach(([className, style]) => {
  cssUtil.addStyle(className, style);
});

const genStyles = cssUtil.generateStyles.bind(cssUtil);

export default genStyles;
