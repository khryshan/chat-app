import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const login = (userName) => console.log(userName);

const Login = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        inputStyles={styles.textInput}
        placeholder="Username"
        onChangeText={setInputText}
      />
      <Button title="Login" onPress={() => login(inputText)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  textInput: {
    marginBottom: 20,
  },
});

export default Login;
