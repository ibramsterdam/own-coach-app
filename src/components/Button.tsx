import GlobalStyles from "@Constants/styles";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
type Props = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};

const Button = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity style={styles.pressable} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: GlobalStyles.colors.darkmode.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    paddingTop: 12,
    paddingRight: 6,
    paddingBottom: 12,
    paddingLeft: 6,
    margin: 6,
    height: 45,
  },
  text: {
    color: GlobalStyles.colors.neutral.N0,
    fontSize: 18,
  },
});

export default Button;
