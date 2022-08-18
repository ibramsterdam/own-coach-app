import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "@Screens/unauthenticated/SignInScreen";
import SignUpScreen from "@Screens/unauthenticated/SignUpScreen";
import WelcomeScreen from "@Screens/unauthenticated/WelcomeScreen";
import GlobalStyles from "@Constants/styles";
import { UnAuthenticatedStackList } from "@Navigation/types";

const Stack = createNativeStackNavigator<UnAuthenticatedStackList>();

const UnAuthenticatedStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.darkmode.primary },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name={"Welcome"}
        component={WelcomeScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name={"SignIn"}
        component={SignInScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name={"SignUp"}
        component={SignUpScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStackNavigator;
