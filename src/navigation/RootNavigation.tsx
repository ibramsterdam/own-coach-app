import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnAuthenticatedStackNavigator from '@Navigation/UnAuthenticatedStackNavigator';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <UnAuthenticatedStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
