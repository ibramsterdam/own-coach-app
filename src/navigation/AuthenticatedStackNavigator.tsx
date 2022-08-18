import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GlobalStyles from "@Constants/styles";
import TempScreen from "@Screens/authenticated/TempScreen";
import { AuthenticatedStackList } from "@Navigation/types";

const Stack = createNativeStackNavigator<AuthenticatedStackList>();

const AuthenticatedStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.darkmode.primary },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name={"Logout"}
        component={TempScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedStackNavigator;
