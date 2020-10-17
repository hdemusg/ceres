import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { addFoodItemMessage } from '../reducers/FoodItemsActions';
import { bindActionCreators } from 'redux';


const FoodCard = ({ foodItem, added, addFoodItemMessage }) => {
    if (added) {
        return (
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
        );
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
                        onPress={() => addFoodItemMessage(foodItem)}
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

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addFoodItemMessage
    }, dispatch)
);

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
export default connect(null, mapDispatchToProps)(FoodCard);