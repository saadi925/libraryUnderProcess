import { StyleRules } from "./StylesRules";
import { Dimensions } from "react-native";
const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;
const defaultStyles: StyleRules = {
  w100: {
    width: "100%",
  },
  h100: {
    height: "100%",
  },
  minW100: {
    minWidth: "100%",
  },
  minH100: {
    minHeight: "100%",
  },
  hScreen: {
    height: vh,
  },
  minHScreen: {
    minHeight: vh,
  },
  maxHScreen: {
    maxHeight: vh,
  },
  wScreen: {
    width: vw,
  },
  minWScreen: {
    minWidth: vw,
  },
  maxWScreen: {
    maxWidth: vw,
  },
  dFlex: {
    display: "flex",
  },
  dNone: {
    display: "none",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyEvenly: {
    justifyContent: "space-evenly",
  },
  justifyAround: {
    justifyContent: "space-around",
  },

  itemsCenter: {
    alignItems: "center",
  },
  itemsEnd: {
    alignItems: "flex-end",
  },
  itemsStart: {
    alignItems: "flex-start",
  },
  itemsBaseline: {
    alignItems: "baseline",
  },
  itemsStretch: {
    alignItems: "stretch",
  },
  contentCenter: {
    alignContent: "center",
  },
  contentEnd: {
    alignContent: "flex-end",
  },
  contentStart: {
    alignContent: "flex-start",
  },
  contentBetween: {
    alignContent: "space-between",
  },
  contentAround: {
    alignContent: "space-around",
  },
  contentStretch: {
    alignContent: "stretch",
  },
  selfStretch: {
    alignSelf: "stretch",
  },
  selfCenter: {
    alignSelf: "center",
  },
  selfBaseline: {
    alignSelf: "baseline",
  },
  selfEnd: {
    alignSelf: "flex-end",
  },
  selfStart: {
    alignSelf: "flex-start",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
  textCenter: {
    textAlign: "center",
  },
  textJustify: {
    textAlign: "justify",
  },
  fontPadding: {
    includeFontPadding: true,
  },
  textVerticalAuto: {
    textAlignVertical: "auto",
  },
  textVerticalBottom: {
    textAlignVertical: "bottom",
  },
  textVerticalTop: {
    textAlignVertical: "top",
  },
  textVerticalCenter: {
    textAlignVertical: "center",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  textLineThrough: {
    textDecorationLine: "line-through",
  },
  textUnderlineThrough: {
    textDecorationLine: "underline line-through",
  },
  backfaceVisible: {
    backfaceVisibility: "visible",
  },
  backfaceHidden: {
    backfaceVisibility: "hidden",
  },
  pointerAuto: {
    pointerEvents: "auto",
  },
  boxOnly: {
    pointerEvents: "box-only",
  },
  boxNone: {
    pointerEvents: "box-none",
  },
  pointerNone: {
    pointerEvents: "none",
  },
  borderSolid: {
    borderStyle: "solid",
  },
  borderDashed: {
    borderStyle: "dashed",
  },
  borderDotted: {
    borderStyle: "dotted",
  },
  italic: {
    fontStyle: "italic",
  },
  normal: {
    fontStyle: "italic",
  },
  font100: {
    fontWeight: "100",
  },
  font200: {
    fontWeight: "200",
  },
  font300: {
    fontWeight: "200",
  },
  font400: {
    fontWeight: "400",
  },
  font500: {
    fontWeight: "500",
  },
  font600: {
    fontWeight: "600",
  },
  font700: {
    fontWeight: "700",
  },
  font800: {
    fontWeight: "800",
  },
  font900: {
    fontWeight: "900",
  },
  fontNormal: {
    fontWeight: "normal",
  },
  fontBold: {
    fontWeight: "bold",
  },
  opacity100: {
    opacity: 1,
  },
  opacity90: {
    opacity: 0.9,
  },
  opacity80: {
    opacity: 0.8,
  },
  opacity70: {
    opacity: 0.7,
  },
  opacity60: {
    opacity: 0.6,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity40: {
    opacity: 0.4,
  },
  opacity30: {
    opacity: 0.3,
  },
  opacity20: {
    opacity: 0.3,
  },
  opacity10: {
    opacity: 0.1,
  },
  opacity0: {
    opacity: 0,
  },
  resizeCover: {
    resizeMode: "cover",
  },
  resizeContain: {
    resizeMode: "contain",
  },
  resizeRepeat: {
    resizeMode: "repeat",
  },
  resizeStretch: {
    resizeMode: "stretch",
  },
  resizeCenter: {
    resizeMode: "center",
  },
  overflowScroll: {
    overflow: "scroll",
  },
  overflowHidden: {
    overflow: "hidden",
  },
  overflow: {
    overflow: "visible",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  lowercase: {
    textTransform: "lowercase",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  transformNone: {
    textTransform: "none",
  },
  flex: {
    flex: 1,
  },
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  flexWrapReverse: {
    flexWrap: "wrap-reverse",
  },
  flexNoWrap: {
    flexWrap: "nowrap",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexCol: {
    flexDirection: "column",
  },
  flexColReverse: {
    flexDirection: "column-reverse",
  },
  flexRowReverse: {
    flexDirection: "row-reverse",
  },
  elevation0: {
    elevation: 0,
  },
  elevation1: {
    elevation: 1,
  },
  elevation2: {
    elevation: 3,
  },
  elevation3: {
    elevation: 5,
  },
  elevation4: {
    elevation: 7,
  },
  elevation5: {
    elevation: 9,
  },
  elevation6: {
    elevation: 11,
  },
  elevation7: {
    elevation: 13,
  },
  elevation8: {
    elevation: 15,
  },
  elevation9: {
    elevation: 17,
  },
  elevation10: {
    elevation: 19,
  },
  elevation11: {
    elevation: 21,
  },
  elevation12: {
    elevation: 23,
  },
  elevation13: {
    elevation: 25,
  },
  elevation14: {
    elevation: 27,
  },
  elevation15: {
    elevation: 29,
  },
  elevation16: {
    elevation: 31,
  },
  elevation17: {
    elevation: 33,
  },
  elevation18: {
    elevation: 35,
  },
  elevation19: {
    elevation: 37,
  },
  elevation20: {
    elevation: 39,
  },
  elevation21: {
    elevation: 41,
  },
  elevation22: {
    elevation: 43,
  },
  elevation23: {
    elevation: 45,
  },
  elevation24: {
    elevation: 47,
  },
  elevation25: {
    elevation: 49,
  },
  elevation26: {
    elevation: 51,
  },
  elevation27: {
    elevation: 53,
  },
  elevation28: {
    elevation: 55,
  },
  elevation29: {
    elevation: 57,
  },
  elevation30: {
    elevation: 59,
  },
  elevation100: {
    elevation: 100,
  },

  shadow1: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  shadowMd: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  shadowLg: {
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
  },
  shadowXl: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },

  bgSlate9: {
    backgroundColor: "#03101D",
  },
  bgSlate8: {
    backgroundColor: "#061523",
  },
  bgSlate7: {
    backgroundColor: "#091D31",
  },
  bgSlate6: {
    backgroundColor: "#122E49",
  },
  bgSlate5: {
    backgroundColor: "#214464",
  },
  bgSlate4: {
    backgroundColor: "#35587A",
  },
  bgSlate3: {
    backgroundColor: "#597A9B",
  },
  bgSlate2: {
    backgroundColor: "#7490AC",
  },
  bgSlate1: {
    backgroundColor: "#9FB2C4",
  },
  textSlate9: {
    color: "#03101D",
  },
  textSlate8: {
    color: "#061523",
  },
  textSlate7: {
    color: "#091D31",
  },
  textSlate6: {
    color: "#122E49",
  },
  textSlate5: {
    color: "#214464",
  },
  textSlate4: {
    color: "#35587A",
  },
  textSlate3: {
    color: "#597A9B",
  },
  textSlate2: {
    color: "#7490AC",
  },
  textSlate1: {
    color: "#9FB2C4",
  },
  bgCream9: {
    backgroundColor: "#332E18",
  },
  bgCream8: {
    backgroundColor: "#5B532F",
  },
  bgCream7: {
    backgroundColor: "#71673B",
  },
  bgCream6: {
    backgroundColor: "#8A7E48",
  },
  bgCream5: {
    backgroundColor: "#B6A762",
  },
  bgCream4: {
    backgroundColor: "#D6C472",
  },
  bgCream3: {
    backgroundColor: "#E9D477",
  },
  bgCream2: {
    backgroundColor: "#E7D378",
  },
  bgCream1: {
    backgroundColor: "#FFE884",
  },
  textCream9: {
    color: "#332E18",
  },
  textCream8: {
    color: "#5B532F",
  },
  textCream7: {
    color: "#71673B",
  },
  textCream6: {
    color: "#8A7E48",
  },
  textCream5: {
    color: "#B6A762",
  },
  textCream4: {
    color: "#D6C472",
  },
  textCream3: {
    color: "#E9D477",
  },
  textCream2: {
    color: "#E7D378",
  },
  textCream1: {
    color: "#FFE884",
  },
  bgRoyalBlue: {
    backgroundColor: "#246EE9",
  },
  bgMintGreen: {
    backgroundColor: "#3EB489",
  },
  textRoyalBlue: {
    color: "#246EE9",
  },
  textMintGreen: {
    color: "#3EB489",
  },
  bgSeaGreen1: {
    backgroundColor: "#00FFEE",
  },
  bgSeaGreen2: {
    backgroundColor: "#00D1C3",
  },
  bgSeaGreen3: {
    backgroundColor: "#00B5A9",
  },
  bgSeaGreen4: {
    backgroundColor: "#009B91",
  },
  bgSeaGreen5: {
    backgroundColor: "#008078",
  },
  bgSeaGreen6: {
    backgroundColor: "#00655F",
  },
  bgSeaGreen7: {
    backgroundColor: "#005B55",
  },
  bgSeaGreen8: {
    backgroundColor: "#003E3A",
  },
  bgSeaGreen9: {
    backgroundColor: "#002C29",
  },
  textSeaGreen1: {
    color: "#00FFEE",
  },
  textSeaGreen2: {
    color: "#00D1C3",
  },
  textSeaGreen3: {
    color: "#00B5A9",
  },
  textSeaGreen4: {
    color: "#009B91",
  },
  textSeaGreen5: {
    color: "#129D94",
  },
  textSeaGreen6: {
    color: "#00655F",
  },
  textSeaGreen7: {
    color: "#005B55",
  },
  textSeaGreen8: {
    color: "#003E3A",
  },
  textSeaGreen9: {
    color: "#002C29",
  },
  bgChoco1: {
    backgroundColor: "#FAD6D6",
  },
  bgChoco2: {
    backgroundColor: "#CE9E9E",
  },
  bgChoco3: {
    backgroundColor: "#C29393",
  },
  bgChoco4: {
    backgroundColor: "#AB7676",
  },
  bgChoco5: {
    backgroundColor: "#8E5555",
  },
  bgChoco6: {
    backgroundColor: "#894848",
  },
  bgChoco7: {
    backgroundColor: "#733333",
  },
  bgChoco8: {
    backgroundColor: "#3B0B0B",
  },
  bgChoco9: {
    backgroundColor: "#290303",
  },
  bgWhite: {
    backgroundColor: "#fff",
  },
  textChoco1: {
    color: "#FAD6D6",
  },
  textChoco2: {
    color: "#CE9E9E",
  },
  textChoco3: {
    color: "#C29393",
  },
  textChoco4: {
    color: "#AB7676",
  },
  textChoco5: {
    color: "#8E5555",
  },
  textChoco6: {
    color: "#894848",
  },
  textChoco7: {
    color: "#733333",
  },
  textChoco8: {
    color: "#3B0B0B",
  },
  textChoco9: {
    color: "#290303",
  },
  textWhite: {
    backgroundColor: "#fff",
  },
  bgParrot1: {
    backgroundColor: "#71F578",
  },
  bgParrot2: {
    backgroundColor: "#5CFF64",
  },
  bgParrot3: {
    backgroundColor: "#00DF0B",
  },
  bgParrot4: {
    backgroundColor: "#00CC0A",
  },
  bgParrot5: {
    backgroundColor: "#00B309",
  },
  bgParrot6: {
    backgroundColor: "#009A08",
  },
  bgParrot7: {
    backgroundColor: "#006C05",
  },
  bgParrot8: {
    backgroundColor: "#004E04",
  },
  bgParrot9: {
    backgroundColor: "#002C02",
  },
  textParrot1: {
    color: "#71F578",
  },
  textParrot2: {
    color: "#5CFF64",
  },
  textParrot3: {
    color: "#00DF0B",
  },
  textParrot4: {
    color: "#00CC0A",
  },
  textParrot5: {
    color: "#00B309",
  },
  textParrot6: {
    color: "#009A08",
  },
  textParrot7: {
    color: "#006C05",
  },
  textParrot8: {
    color: "#004E04",
  },
  textParrot9: {
    color: "#002C02",
  },

  textBlue1: {
    color: "#74A9FF",
  },
  textBlue2: {
    color: "#5594F8",
  },
  textBlue3: {
    color: "#307DF8",
  },
  textBlue4: {
    color: "#126CFD",
  },
  textBlue5: {
    color: "#0060FC",
  },
  textBlue6: {
    color: "#004DC9",
  },
  textBlue7: {
    color: "#0141A9",
  },
  textBlue8: {
    color: "#00317F",
  },
  textBlue9: {
    color: "#001E4E",
  },
  bgBlue1: {
    backgroundColor: "#74A9FF",
  },
  bgBlue2: {
    backgroundColor: "#5594F8",
  },
  bgBlue3: {
    backgroundColor: "#307DF8",
  },
  bgBlue4: {
    backgroundColor: "#126CFD",
  },
  bgBlue5: {
    backgroundColor: "#0060FC",
  },
  bgBlue6: {
    backgroundColor: "#004DC9",
  },
  bgBlue7: {
    backgroundColor: "#0141A9",
  },
  bgBlue8: {
    backgroundColor: "#00317F",
  },
  bgBlue9: {
    backgroundColor: "#001E4E",
  },
  bgRed1: {
    backgroundColor: "#FAD3D3",
  },
  bgRed2: {
    backgroundColor: "#FAAEAE",
  },
  bgRed3: {
    backgroundColor: "#FA9191",
  },
  bgRed4: {
    backgroundColor: "#F87D7D",
  },
  bgRed5: {
    backgroundColor: "#FA6060",
  },
  bgRed6: {
    backgroundColor: "#F73A3A",
  },
  bgRed7: {
    backgroundColor: "#F82121",
  },
  bgRed8: {
    backgroundColor: "#9D0505",
  },
  bgRed9: {
    backgroundColor: "#4C0000",
  },
  textRed1: {
    color: "#FAD3D3",
  },
  textRed2: {
    color: "#FAAEAE",
  },
  textRed3: {
    color: "#FA9191",
  },
  textRed4: {
    color: "#F87D7D",
  },
  textRed5: {
    color: "#FA6060",
  },
  textRed6: {
    color: "#F73A3A",
  },
  textRed7: {
    color: "#F82121",
  },
  textRed8: {
    color: "#9D0505",
  },
  textRed9: {
    color: "#4C0000",
  },
  rotateX45: {
    transform: [{ rotateX: "45deg" }],
  },
  rotateY45: {
    transform: [{ rotateY: "45deg" }],
  },
  rotateZ45: {
    transform: [{ rotateZ: "45deg" }],
  },
  rotate45: {
    transform: [{ rotate: "45deg" }],
  },
};

export default defaultStyles;
