import CSSUtility from "./CSSUtility/CSSUtility";
import defaultStyles from "./defaultStyles";

const cssUtil = CSSUtility.getInstance();

Object.entries(defaultStyles).forEach(([className, style]) => {
  cssUtil.addStyle(className, style);
});

const genStyles = cssUtil.generateStyles.bind(cssUtil);

export default genStyles;
