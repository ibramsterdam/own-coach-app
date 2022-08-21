import React, { useState } from "react";
import GlobalStyles from "@Constants/styles";
import { signUp } from "@Api/authApi";

import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Alert,
} from "react-native";
import type { UnAuthScreenProps } from "@Navigation/types";
import Input from "@Components/Input";
import validateEmail from "@Utils/validateEmail";
import validatePassword from "@Utils/validatePassword";
import { clientAuthState, useClientStore } from "@Utils/zustandStore";

const SignInScreen = ({ navigation }: UnAuthScreenProps<"SignIn">) => {
  const setAuthState = useClientStore((state) => state.setAuthState);
  const authState = useClientStore((state) => state.authState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValidationError, setEmailValidationError] = useState<
    undefined | string
  >(undefined);
  const [passwordValidationError, setPasswordValidationError] = useState<
    undefined | string
  >(undefined);

  const handleEmailInput = (input: string) => {
    setEmail(input);
  };
  const handlePasswordInput = (input: string) => {
    setPassword(input);
  };
  const handleConfirmPasswordInput = (input: string) => {
    setConfirmPassword(input);
  };

  const handleSignup = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    setEmailValidationError(undefined);
    setPasswordValidationError(undefined);
    setPassword("");
    setConfirmPassword("");

    const validationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    if (validationError) {
      setEmailValidationError(validationError);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordValidationError("not the same bro");
      return;
    }

    if (passwordValidationError) {
      setPasswordValidationError(passwordValidationError);
      return;
    }

    setAuthState(clientAuthState.LOADING);
    const result = await signUp({ email, password });

    if (result.message === "SignUp Success") {
      setAuthState(clientAuthState.AUTHENTICATED);
    }

    if (result.message === "SignUp Failed") {
      setAuthState(clientAuthState.NOT_AUTHENTICATED);
      Alert.alert("Failed :(", "Could not SignUp", [
        {
          text: "Try Again",
        },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={18}
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Input
            error={emailValidationError}
            label={"E-mail"}
            autoFocus
            onChangeText={handleEmailInput}
            keyboardType={"email-address"}
            value={email}
          />
          <Input
            error={passwordValidationError}
            label={"Password"}
            secureTextEntry
            onChangeText={handlePasswordInput}
            value={password}
          />
          <Input
            error={passwordValidationError}
            label={"Confirm Password"}
            secureTextEntry
            onChangeText={handleConfirmPasswordInput}
            value={confirmPassword}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.pressable}
            onPress={() =>
              handleSignup(email.toLowerCase(), password, confirmPassword)
            }
          >
            {authState === clientAuthState.LOADING ? (
              <ActivityIndicator color='white' />
            ) : (
              <Text style={styles.text}>Continue</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    marginBottom: 45,
    justifyContent: "flex-end",
  },
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
export default SignInScreen;
