import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ShoppingCartItem = ({ inputItem }) => {
    console.log("enter");
    return (

        <View style={styles.cartItemWrapper} >
            <View style={styles.rowContainer}>
                <Text>{inputItem.title} - </Text>
                <Text>{inputItem.price}</Text>
            </View>
            <View>
                <Text style={styles.vendorText}>{inputItem.vendor}</Text>
            </View>
        </View >

    );
}
const styles = StyleSheet.create({
    cartItemWrapper: {
        width: "336",
        height: "56",
        backgroundColor: "#EBEBF5",
    },
    rowContainer: {
        display: "flex",
        fontSize: "20",
        flexDirection: 'row'
    },
    vendorText: {
        fontSize: "15"
    }

});

export default ShoppingCartItem;