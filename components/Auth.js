import React, {useState} from 'react';
//import Realm from 'realm';
import { StyleSheet, Text, View, TextInput, Button, Picker} from 'react-native';
import axios from 'axios';

//axios.defaults.baseURL = "http://localhost:3000";

function handleSignup(email, password, selectedValue) {
    console.log(email, password, selectedValue, "S");
}

function handleLogin(email, password) {
    console.log(email, password, "L");
}

export function Auth() {
      
        const [selectedValue, setSelectedValue] = useState("consumer");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        /*
        const handle = async () =>
            login(null, email, password)
            .then(() =>
                Router.replace({
                pathname: urls.pages.app.index,
                })
            )
            .catch((error) => {
                window.alert(error.message);
            });
        */
      
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder={"email"}></TextInput>
            <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder={"password"}></TextInput>
            <Picker selectedValue = {selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label = "Consumer" value = "consumer" />
              <Picker.Item label = "Messenger" value = "messenger" />
              <Picker.Item label = "Business" value = "business" />
            </Picker>
            <View
              style={{
              flexDirection: "row",
              padding: 20
            }}>
              <Button style={{backgroundColor: '#0f0', color: '#fff'}} onPress={(email, password, selectedValue) => handleSignup(email, password, selectedValue)} title={"Sign Up"}></Button>
              <Button style={{backgroundColor: '#0f0', color: '#fff'}} onPress={(email, password) => handleLogin(email, password)} title={"Log In"}></Button>
            </View>
           </View>
        );
      };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
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