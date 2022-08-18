import React, { useState } from "react";
import Button from "@Components/Button";
import GlobalStyles from "@Constants/styles";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import type { UnAuthScreenProps } from "@Navigation/types";
import Input from "@Components/Input";
import { signIn } from "../../api/authApi";
import validateEmail from "@Utils/validateEmail";

const SignInScreen = ({ navigation }: UnAuthScreenProps<"SignIn">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidationError, setEmailValidationError] = useState<
    undefined | string
  >(undefined);

  const handleEmailInput = (input: string) => {
    setEmail(input);
  };
  const handlePasswordInput = (input: string) => {
    setPassword(input);
  };

  const handleLogin = async (email: string, password: string) => {
    const validationError = validateEmail(email);
    if (validationError) {
      setEmailValidationError(validationError);
      return;
    }
    setEmailValidationError(undefined);
    const test = await signIn({ email, password });
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
            label={"Password"}
            secureTextEntry
            onChangeText={handlePasswordInput}
            value={password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => handleLogin(email, password)}
            text={"Continue"}
          />
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
    marginBottom: 45,
    flex: 0.4,
    justifyContent: "flex-end",
  },
});
export default SignInScreen;
