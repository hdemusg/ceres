import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class Header extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: "flex-start", flex: 1}}>
          <Text style={styles.title}>ceres</Text>
        </View>
        <View style={{justifyContent: "flex-end", flex: 1}}>
          <Text style={styles.email}>foo@bar.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    backgroundColor: '#DBDBDB',
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 20, 
    color: "#469F3D", 
    flexgrow: 1,
    paddingLeft: 25,
  },
  email: {
    fontSize: 16, 
    alignItems: "center",
    justifyContent: "right",
    color: "#000", 
    flexgrow: 2,
  }
});