import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Login from './src/screens/Login';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
