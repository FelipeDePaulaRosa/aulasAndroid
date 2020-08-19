import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './src/Contador'

export default function App() {
  return (
    <View style={styles.container}>
     <Contador inicial={4}></Contador>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'beige',
    justifyContent: 'center'
  /*   alignItems: 'center', */
  },
  text: {
    color:'red',
    fontSize: 18
  }
});