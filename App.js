import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import { Header } from './components/Header.js';
import { Auth } from './components/Auth.js';
import {FoodFindingMain} from './components/FoodFindingView/FoodFindingMain';
import MessengerView from './components/MessengerView/MessengerView';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PaymentMain from './components/PaymentView/PaymentView';
import BusinessView from './components/BusinessView/BusinessView';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FoodItemsReducer from './components/reducers/FoodItemsReducer';

export default function App() {

  const Stack = createStackNavigator();
  const itemsStore = createStore(FoodItemsReducer);
  return (
    // <View style={{ backgroundColor: "#555", flex: 1, fontFamily: "Futura" }}>
    //   <Header email={"Sign In"} />
    //   <View style={styles.container}>
    //     <Auth />
    //   </View>
    // </View>
    <Provider store={itemsStore}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HOME" component={AuthTitleScreen} />
        <Stack.Screen name="BusinessView" component={BusinessView} />
  <Stack.Screen name="FoodItems">{props => <FoodFindingMain {...props} extraData={navigator} />}</Stack.Screen>
        <Stack.Screen name="Cart" component={PaymentMain} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

function AuthTitleScreen() {
  return (
    <View style={{ backgroundColor: "#555", flex: 1, fontFamily: "Futura" }}>
      <View style={styles.container}>
        {/* <Header name={""}/> */}
        <Auth navigator={navigator} />
      </View>
    </View>
  )
  
}

// const Stack = createStackNavigator();


// export default function App() {
//   return (
//     <Provider store={itemsStore}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Main" component={FoodFindingMain} options={{ title: 'Welcome' }} />
//           <Stack.Screen name="Cart" component={PaymentMain} options={{ title: 'Cart' }} />
//         </Stack.Navigator>
//         {/* <View style={styles.container}>
//         <FoodFindingMain />
//       </View> */}
//       </NavigationContainer>
//     </Provider>
//   );
// }

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
