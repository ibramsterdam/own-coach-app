import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnAuthenticatedStack from '@Screens/UnAuthenticatedStack';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <UnAuthenticatedStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
