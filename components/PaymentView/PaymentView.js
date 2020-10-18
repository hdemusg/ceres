import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, Button, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ShoppingCartItem from './ShoppingCartItem';
import {Header} from '../Header';

const PaymentMain = ({ route }) => {
    const renderShoppingCartItems = ({ item }) => {
        return <ShoppingCartItem inputItem={item} />
    }

    let subtotal = calculateTotal(route.params.cartItems);
    console.log("input to payment main and subtotal", route.params.cartItems, subtotal);

    let VIEW =
        <SafeAreaView style={styles.cont}>
            <Header /> 
            {/* todo Header should have a back button that re renders properly the old items */}
            <View>
                <FlatList data={route.params.cartItems} renderItem={renderShoppingCartItems} keyExtractor={item => item.id} />
            </View>
            <View style={styles.paymentTotal}>
                <Text style={styles.total}>$ {calculateTotal(route.params.cartItems)}</Text>
            </View>
            <View style={styles.paymentButtons}>
                <Button style={styles.ncrButton} title="Pay Using In-App Funds"></Button>
                <View style={styles.spacer}></View>
                <Button style={styles.ncrButton} title="Pay With Card"></Button>
            </View>
        </SafeAreaView>
        ;
    return VIEW
}

function calculateTotal(shoppingItems) {
    let total = 0;
    shoppingItems.forEach(element => {
        total += element.price;
    });
    return total;
}

const styles = StyleSheet.create({
    cont: {
        width: "100%",
        backgroundColor: "white",
        height: "100%"
    },
    paymentButtons: {
        display: "flex",
        flexDirection: "row",
    },
    ncrButton: {
        width: 97,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#2E7DF7",
        color: "white",
        textAlign: "center",
    },
    spacer: {
        flexGrow: 2
    }

})
export default PaymentMain;