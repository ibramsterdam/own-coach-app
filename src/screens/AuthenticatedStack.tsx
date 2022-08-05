import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@Screens/unauthenticated/LoginScreen';
import RegisterScreen from '@Screens/unauthenticated/RegisterScreen';
import WelcomeScreen from '@Screens/unauthenticated/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
