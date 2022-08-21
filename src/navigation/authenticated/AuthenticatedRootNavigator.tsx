import React from "react";
import GlobalStyles from "@Constants/styles";
import Profile from "@Navigation/authenticated/screens/Profile";
import { AuthenticatedStackList } from "@Navigation/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Track from "./tabs/Track";
import { PersonSvg, TrackSvg } from "@Components/svg";
import { Text } from "react-native";

const Tab = createBottomTabNavigator<AuthenticatedStackList>();

const AuthenticatedRootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.neutral.N800,
          paddingTop: 10,
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: GlobalStyles.colors.darkmode.secondary,
              }}
            >
              {focused ? route.name : ""}
            </Text>
          );
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Track") {
            return TrackSvg(
              focused ? GlobalStyles.colors.darkmode.secondary : "white"
            );
          }
          if (route.name === "Profile") {
            return PersonSvg(
              focused ? GlobalStyles.colors.darkmode.secondary : "white"
            );
          }
        },
      })}
    >
      <Tab.Screen
        name={"Track"}
        component={Track}
        options={{ title: "Track" }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedRootNavigator;
