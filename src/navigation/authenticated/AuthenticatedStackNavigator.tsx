import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GlobalStyles from "@Constants/styles";
import TempScreen from "@Navigation/authenticated/screens/TempScreen";
import { AuthenticatedStackList } from "@Navigation/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator<AuthenticatedStackList>();
const Tab = createBottomTabNavigator<AuthenticatedStackList>();

const AuthenticatedStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.darkmode.primary },
        headerTintColor: "white",
      }}
    >
      <Tab.Screen
        name={"Logout"}
        component={TempScreen}
        options={{ title: "" }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedStackNavigator;
