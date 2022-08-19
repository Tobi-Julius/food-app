import { Text as MainText } from "react-native";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const TextBold = ({ text, textStyle, textAlign, ...others }) => {
  const [fontsLoaded] = useFonts({
    NunitoBold: require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainText
      onLayout={onLayout}
      style={[textStyle, textAlign, { fontFamily: "NunitoBold" }]}
      {...others}
    >
      {text}
    </MainText>
  );
};
