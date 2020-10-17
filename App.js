import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { StyleSheet, Text, View } from 'react-native';
import BusinessView from './components/BusinessView/BusinessView';
import FoodFindingMain from './components/FoodFindingView/FoodFindingMain';

export default function App() {
  return (
    <BusinessView/>
    // <FoodFindingMain/>
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
