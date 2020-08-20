import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quadrado from './src/FlexBox'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Aula 3</Text> */}
      <StatusBar style="auto" />
      <Quadrado></Quadrado>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
