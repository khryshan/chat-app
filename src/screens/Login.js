import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInput from '../components/TextInput';

const Login = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Username" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
});

export default Login;
