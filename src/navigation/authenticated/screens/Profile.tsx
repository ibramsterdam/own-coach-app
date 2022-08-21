import React from "react";
import GlobalStyles from "@Constants/styles";
import { StyleSheet, Text, View } from "react-native";
import Button from "@Components/Button";
import type { AuthScreenProps } from "@Navigation/types";
import { removeValue } from "@Utils/expoSecureStore";
import { clientAuthState, useClientStore } from "@Utils/zustandStore";

const Profile = ({ navigation }: AuthScreenProps<"Profile">) => {
  const setAuthState = useClientStore((state) => state.setAuthState);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}></View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            removeValue("BEARER_TOKEN");
            setAuthState(clientAuthState.NOT_AUTHENTICATED);
          }}
          text={"Log Out"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.darkmode.primary,
  },
  textContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 0.4,
    justifyContent: "flex-end",
    marginBottom: 45,
  },
  welcomeText: {
    color: GlobalStyles.colors.neutral.N0,
    fontSize: 24,
    fontWeight: "500",
  },
});
export default Profile;
