import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, Button } from 'react-native';



const FoodCard = ({ foodItem }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageCont}>

            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.foodItemText}>{foodItem.title} </Text>
                <Text style={styles.foodPriceText}> - ${foodItem.price}</Text>
                <Button
                    title="Add"
                />
            </View>
            <View>
                <Text style={styles.vendorText}>{foodItem.vendor}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#fdfffc",
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        paddingBottom: 10,
        height: "20vh"
    },
    rowContainer: {
        flexDirection: 'row'
    },
    foodItemText: {
        fontSize: 20
    },
    foodPriceText: {
        fontSize: 25
    },
    imageCont: {
        height: "50%"
    }
});
export default FoodCard;