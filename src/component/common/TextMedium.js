import { Text as MainText } from "react-native";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const TextMedium = ({ text, textStyle, textAlign, ...others }) => {
  const [fontsLoaded] = useFonts({
    NunitoMedium: require("../../assets/fonts/Nunito-SemiBold.ttf"),
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
      style={[textStyle, textAlign, { fontFamily: "NunitoMedium" }]}
      {...others}
    >
      {text}
    </MainText>
  );
};
