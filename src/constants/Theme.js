import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base color
  white: "#F7F7F7",
  orange: "#FFB72B",
  yellow: "#CDBE78",
  lightGreen: "#B5FE83",

  // others
  gray1: "#F2F2F2",
  gray2: "#B2B1B9",
  gray3: "#AAA",
  gray4: "#BBB",
  dark: "#000",
  transparent: "transparent",
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 5,
  radius1: 10,
  radius3: 15,
  radiusHalf: "50%",
  padding: 5,
  padding1: 10,
  padding2: 13,

  // fontSizes
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  width,
  height,
};
