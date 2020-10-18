import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker} from 'react-native';
import { Header } from './components/Header.js';
import { Auth } from './components/Auth.js';

export default function App() {

  return (
    <View style={{backgroundColor: "#555", flex: 1, fontFamily: "Futura"}}>
      <Header email={"Sign In"} />
      <View style={styles.container}>
        <Auth />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: 'center',
    color: "#0f0",
  },
  instruction: {
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
  }
});
