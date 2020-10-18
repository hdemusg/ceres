import React, { useState } from 'react';
//import Realm from 'realm';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import axios from 'axios';

//axios.defaults.baseURL = "http://localhost:3000";

export function Auth() {

  const handleSignup = (email, password, selectedVal) => {
    console.log(email, password, selectedVal)
    // alert(this.state.email + " " + this.state.password + " " + this.state.selectedValue);
  }

  const handleLogin = (email, password, selectedVal) => {
    console.log(email, password, selectedVal)
    // alert(this.state.email + " " + this.state.password);
  }

  const [selectedValue, setSelectedValue] = useState("consumer");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

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
      <TextInput style={styles.input} value={email} onChangeText={(text) => { onChangeEmail(text) }} placeholder={"email"}></TextInput>
      <TextInput style={styles.input} value={password} onChangeText={(text) => onChangePassword(text)} secureTextEntry={true} placeholder={"password"}></TextInput>
      <Picker style={styles.picker} selectedValue={selectedValue} value={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Consumer" value="consumer" />
        <Picker.Item label="Messenger" value="messenger" />
        <Picker.Item label="Business" value="business" />
      </Picker>
      <View
        style={{
          flexDirection: "row",
          padding: 20
        }}>
        <Button style={{ backgroundColor: '#2e7df7', color: '#fff', borderRadius: 8 }} onPress={() => handleSignup(email, password, selectedValue)} title={"Sign Up"}></Button>
        <Button style={{ backgroundColor: '#2e7df7', color: '#fff', borderRadius: 8 }} onPress={() => handleLogin(email, password, selectedValue)} title={"Log In"}></Button>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: 'center',
    color: "#469F3D",
  },
  instruction: {
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 10,
    boxSizing: 'border-box',
    boxShadow: "0 0 0 #A0DFFD", 
    border: "1px #3C3C43",
    marginBottom: 30,
  },
  picker: {
    height: 40, 
    width: 250,
    backgroundColor: "#fff",
    border: "1px #3C3C43",
    boxSizing: "border-box", 
    borderRadius: 8,
  }
});