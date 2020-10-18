import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, Button, Alert } from 'react-native';

const PaymentView = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.cont}>
            <View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cont: {
        width: "100%",
        backgroundColor: "red",
        height: "100%"
    }
})
export default PaymentView;