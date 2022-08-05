import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedStack from '@Screens/AuthenticatedStack';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
