import React from 'react';
import GlobalStyles from '@Constants/styles';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Button from '@Components/Button';
import screenEnums from '@Constants/screenEnums';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>OwnCoach</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(screenEnums.LOGIN)}
          text={'Log in'}
        />
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>New to OwnCoach? </Text>
          <Pressable onPress={() => navigation.navigate(screenEnums.SIGNUP)}>
            <Text style={styles.signUpLink}>Sign Up!</Text>
          </Pressable>
        </View>
      </View>
    </View>
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
    justifyContent: 'flex-end',
  },
  signUpContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  welcomeText: {
    color: GlobalStyles.colors.neutral.N0,
    fontSize: 24,
    fontWeight: '500',
  },
  signUpText: {
    color: GlobalStyles.colors.neutral.N0,
  },
  signUpLink: {
    fontWeight: '700',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default WelcomeScreen;
