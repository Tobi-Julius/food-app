import { Text as MainText } from "react-native";
import React from "react";

export const Text = ({
  text,
  color,
  textStyle,
  textAlign,
  fontSize,
  fontWeight,
  ...others
}) => {
  return (
    <MainText
      style={[textStyle, color, textAlign, fontSize, fontWeight]}
      {...others}
    >
      {text}
    </MainText>
  );
};
