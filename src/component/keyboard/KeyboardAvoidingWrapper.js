import {
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { Children } from "react";

const KeyboardAvoidingWrapper = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
          {Children}
        </TouchableWithoutFeedback>
      </ScrollView>  
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
