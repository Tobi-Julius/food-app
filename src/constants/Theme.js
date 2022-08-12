import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base color
  primary: "#94660a",
  secondary: "#cc9629",

  // COLORS
  black: "",
  white: "",

  // others
  lightBaseColor: "#a68d5d",
  base1: "#bf9b24",
  base2: "#fc2f5a",
  base3: "#6e6o31",
};

export const SIZES = {
  base: 8,
  font: 14,
  radiusHalf: "50%",
  radius: 30,
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
