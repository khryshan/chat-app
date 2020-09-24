import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../styles/colors';

const Button = ({onPress, title, ...props}) => {
  return (
    <TouchableOpacity title="Login" onPress={onPress} style={slyles.btn}>
      <Text style={slyles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const slyles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default Button;
