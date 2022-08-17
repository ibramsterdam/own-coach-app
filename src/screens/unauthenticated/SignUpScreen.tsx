import React, { useState } from 'react';
import Button from '@Components/Button';
import GlobalStyles from '@Constants/styles';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import type { UnAuthScreenProps } from '@Navigation/types';
import Input from '@Components/Input';

const SignInScreen = ({ navigation }: UnAuthScreenProps<'SignIn'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailInput = (input: string) => {
    setEmail(input);
  };
  const handlePasswordInput = (input: string) => {
    setPassword(input);
  };
  const handleConfirmPasswordInput = (input: string) => {
    setConfirmPassword(input);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={18}
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Input
            label={'E-mail'}
            autoFocus
            onChangeText={handleEmailInput}
            keyboardType={'email-address'}
            value={email}
          />
          <Input
            label={'Password'}
            secureTextEntry
            onChangeText={handlePasswordInput}
            value={password}
          />
          <Input
            label={'Confirm Password'}
            secureTextEntry
            onChangeText={handleConfirmPasswordInput}
            value={password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => console.log('Hello')} text={'Continue'} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.darkmode.primary,
  },
  textContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.4,
    marginBottom: 45,
    justifyContent: 'flex-end',
  },
});
export default SignInScreen;
