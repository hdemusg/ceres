import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';



const FoodCard = ({ foodItem, added }) => {



    if (added) {
        <View style={styles.card}>
            <View style={styles.imageCont}>

            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.foodItemText}>{foodItem.title} </Text>

                <Text style={styles.foodPriceText}> - ${foodItem.price}</Text>
                <View style={styles.spacer}></View>

                <Button style={{ backgroundColor: "red" }}
                    title="Remove"
                />
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.vendorText}>{foodItem.vendor} | </Text>
                <Text style={styles.vendorText}>Qty: {foodItem.qty}</Text>
            </View>
        </View>
    } else {
        return (
            <View style={styles.card}>
                <View style={styles.imageCont}>

                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.foodItemText}>{foodItem.title} </Text>

                    <Text style={styles.foodPriceText}> - ${foodItem.price}</Text>
                    <View style={styles.spacer}></View>

                    <Button
                        title="Add"
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.vendorText}>{foodItem.vendor} | </Text>
                    <Text style={styles.vendorText}>Qty: {foodItem.qty}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#fdfffc",
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        height: "20vh",
        marginTop: 2,
        marginBottom: 2
    },
    spacer: {
        flexGrow: 2
    },
    rowContainer: {
        flexDirection: 'row'
    },
    foodItemText: {
        fontSize: 20
    },
    foodPriceText: {
        fontSize: 20
    },
    imageCont: {
        height: "50%"
    }
});
export default FoodCard;