import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculadora from './src/Calculadora'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculadora Basica</Text>
      <Calculadora></Calculadora>
      <StatusBar style="auto" />
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
