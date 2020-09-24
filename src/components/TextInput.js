import React from 'react';
import {
  Text,
  TextInput as DefaultTextInput,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../styles/colors';

const TextInput = (props) => {
  const {label} = props;
  console.log('label: ', label);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.labelStyle}>{label}</Text>}
      <DefaultTextInput {...props} style={styles.inputStyle} />
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
