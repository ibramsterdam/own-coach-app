import GlobalStyles from '@Constants/styles';
import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  KeyboardType,
  View,
  Text,
} from 'react-native';

type Props = {
  autoFocus?: boolean;
  isInvalid?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  label?: string;
  keyboardType?: KeyboardType;
  value?: string;
  onChangeText: (input: string) => void;
};
const Input = ({
  label,
  value,
  autoFocus,
  isInvalid,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <RNTextInput
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  labelInvalid: {
    color: GlobalStyles.colors.error,
  },
  inputInvalid: {
    backgroundColor: GlobalStyles.colors.error,
  },
  input: {
    height: 40,
    margin: 1,
    borderRadius: 6,
    padding: 10,
    minWidth: 280,
    backgroundColor: 'white',
    color: GlobalStyles.colors.darkmode.secondary,
  },
});

export default Input;
