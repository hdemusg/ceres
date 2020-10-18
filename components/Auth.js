import React, { useState } from 'react';
//import Realm from 'realm';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export function Auth() {

  const handleSignup = (email, password, selectedVal) => {
    console.log(email, password, selectedVal)
    // alert(this.state.email + " " + this.state.password + " " + this.state.selectedValue);
  }

  const handleLogin = (email, password, selectedVal) => {
    axios.get('/users/', { params: { email: email } })
      .then(res => {
        console.log(res.data[0]);
        if (res.data[0].password === password && res.data[0].role === selectedVal) {
          console.log(true)
        } else {
          console.log(false)
        }
      })
      .catch(e => {
        console.log(e)
      });
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
      <Picker selectedValue={selectedValue} value={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Consumer" value="consumer" />
        <Picker.Item label="Messenger" value="messenger" />
        <Picker.Item label="Business" value="business" />
      </Picker>
      <View
        style={{
          flexDirection: "row",
          padding: 20
        }}>
        <Button style={{ backgroundColor: '#0f0', color: '#fff' }} onPress={() => handleSignup(email, password, selectedValue)} title={"Sign Up"}></Button>
        <Button style={{ backgroundColor: '#0f0', color: '#fff' }} onPress={() => handleLogin(email, password, selectedValue)} title={"Log In"}></Button>
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