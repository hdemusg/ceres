import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FoodFindingMain from './components/FoodFindingView/FoodFindingMain';

export default function App() {
  return (
    <View style={styles.container}>
      <FoodFindingMain />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
    // flex: 1,
    // backgroundColor: '#f00',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
