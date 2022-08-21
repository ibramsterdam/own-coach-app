import React, { useState } from "react";
import GlobalStyles from "@Constants/styles";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import type { UnAuthScreenProps } from "@Navigation/types";
import Input from "@Components/Input";
import { signIn } from "@Api/authApi";
import validateEmail from "@Utils/validateEmail";
import { clientAuthState, useClientStore } from "@Utils/zustandStore";

const SignInScreen = ({ navigation }: UnAuthScreenProps<"SignIn">) => {
  const setAuthState = useClientStore((state) => state.setAuthState);
  const authState = useClientStore((state) => state.authState);
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

  const handleSignIn = async (email: string, password: string) => {
    const validationError = validateEmail(email);

    if (validationError) {
      setEmailValidationError(validationError);
      return;
    }

    setEmailValidationError(undefined);
    setAuthState(clientAuthState.LOADING);
    const result = await signIn({ email, password });

    if (result.message === "SignIn Success") {
      setAuthState(clientAuthState.AUTHENTICATED);
    }

    if (result.message === "SignIn Failed") {
      setAuthState(clientAuthState.NOT_AUTHENTICATED);
      Alert.alert("Failed :(", "Could not authenticate", [
        {
          text: "Try Again",
          onPress: () => {
            setPassword("");
          },
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
            label={"Password"}
            secureTextEntry
            onChangeText={handlePasswordInput}
            value={password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.pressable}
            onPress={() => handleSignIn(email.toLowerCase(), password)}
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
    marginBottom: 45,
    flex: 0.4,
    justifyContent: "flex-end",
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
export default SignInScreen;
