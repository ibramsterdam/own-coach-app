import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@Screens/unauthenticated/LoginScreen';
import SignUpScreen from '@Screens/unauthenticated/SignUpScreen';
import WelcomeScreen from '@Screens/unauthenticated/WelcomeScreen';
import GlobalStyles from '@Constants/styles';
import screenEnums from '@Constants/screenEnums';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.darkmode.primary },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name={screenEnums.WELCOME}
        component={WelcomeScreen}
        options={{ title: '' }}
      />
      <Stack.Screen name={screenEnums.LOGIN} component={LoginScreen} />
      <Stack.Screen name={screenEnums.SIGNUP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
