import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
});
export default SignUpScreen;
