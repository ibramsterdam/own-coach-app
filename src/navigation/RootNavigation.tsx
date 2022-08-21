import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UnAuthenticatedRootNavigator from "@Navigation/unauthenticated/UnAuthenticatedRootNavigator";
import AuthenticatedRootNavigator from "@Navigation/authenticated/AuthenticatedRootNavigator";
import { clientAuthState, useClientStore } from "@Utils/zustandStore";

const RootNavigation = () => {
  const authState = useClientStore((state) => state.authState);

  if (authState === clientAuthState.AUTHENTICATED) {
    return (
      <NavigationContainer>
        <AuthenticatedRootNavigator />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <UnAuthenticatedRootNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
