import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FoodFindingMain from './components/FoodFindingView/FoodFindingMain';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { create } from 'react-test-renderer';
import PaymentView from './components/PaymentView/PaymentView';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FoodItemsReducer from './components/reducers/FoodItemsReducer';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const itemsStore = createStore(FoodItemsReducer);

export default function App() {
  return (
    <Provider store={itemsStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={FoodFindingMain} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Cart" component={PaymentView} />
        </Stack.Navigator>
        {/* <View style={styles.container}>
        <FoodFindingMain />
      </View> */}
      </NavigationContainer>
    </Provider>
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
