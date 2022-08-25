import GlobalStyles from "@Constants/styles";
import React from "react";
import { Text, View } from "react-native";

const Track = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.darkmode.primary,
      }}
    >
      <Text>Track</Text>
    </View>
  );
};

export default Track;
