import { ViewStyle, TextStyle, ImageStyle, ViewProps } from "react-native";

export type StyleRules = Record<
  string,
  ViewStyle | TextStyle | ImageStyle | ViewProps
>;
