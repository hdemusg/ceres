import React, { Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker} from 'react-native';

function handleSignup() {
    console.log("Signup");
}

function handleLogin() {
    console.log("Login");
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
            <TextInput style={styles.input} placeholder={"email"}></TextInput>
            <TextInput style={styles.input} secureTextEntry={true} placeholder={"password"}></TextInput>
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
              <Button style={{backgroundColor: '#0f0', color: '#fff'}} onPress={handleSignup} title={"Sign Up"}></Button>
              <Button style={{backgroundColor: '#0f0', color: '#fff'}} onPress={handleLogin} title={"Log In"}></Button>
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