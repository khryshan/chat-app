import React from 'react';
import {
  Text,
  TextInput as DefaultTextInput,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../styles/colors';

const TextInput = ({inputStyles, label, onChangeText, ...props}) => {
  return (
    <View style={[styles.container, inputStyles]}>
      {label && <Text style={styles.labelStyle}>{label}</Text>}
      <DefaultTextInput
        style={styles.inputStyle}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelStyle: {
    fontSize: 16,
    paddingBottom: 8,
  },
  inputStyle: {
    height: 48,
    paddingHorizontal: 20,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 14,
  },
});

export default TextInput;
