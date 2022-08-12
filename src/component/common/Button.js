import { TouchableOpacity } from "react-native";
import { Text } from "./Text";

export const Button = ({
  btnText,
  onPress,
  btnTextStyle,
  containerStyle,
  ...others
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle} {...others}>
      <Text text={btnText} style={[btnTextStyle]} />
    </TouchableOpacity>
  );
};
