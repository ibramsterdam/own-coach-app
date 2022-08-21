import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UnAuthenticatedStackNavigator from "@Navigation/unauthenticated/UnAuthenticatedStackNavigator";
import AuthenticatedStackNavigator from "@Navigation/authenticated/AuthenticatedStackNavigator";
import { clientAuthState, useClientStore } from "@Utils/zustandStore";

const RootNavigation = () => {
  const authState = useClientStore((state) => state.authState);

  if (authState === clientAuthState.AUTHENTICATED) {
    return (
      <NavigationContainer>
        <AuthenticatedStackNavigator />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <UnAuthenticatedStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
