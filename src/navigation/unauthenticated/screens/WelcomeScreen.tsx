import React from "react";
import GlobalStyles from "@Constants/styles";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Button from "@Components/Button";
import type { UnAuthScreenProps } from "@Navigation/types";

const WelcomeScreen = ({ navigation }: UnAuthScreenProps<"Welcome">) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>OwnCoach</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity
            style={styles.pressable}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>New to OwnCoach? </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpLink}>Sign Up!</Text>
          </Pressable>
        </View>
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
  signUpContainer: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  welcomeText: {
    color: GlobalStyles.colors.neutral.N0,
    fontSize: 24,
    fontWeight: "500",
  },
  signUpText: {
    color: GlobalStyles.colors.neutral.N0,
  },
  signUpLink: {
    fontWeight: "700",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    backgroundColor: GlobalStyles.colors.darkmode.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    padding: 6,
    margin: 6,
    height: 45,
  },
  text: {
    color: GlobalStyles.colors.neutral.N0,
    fontSize: 18,
  },
});
export default WelcomeScreen;
