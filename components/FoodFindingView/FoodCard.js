import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { addFoodItemMessage } from '../reducers/FoodItemsActions';
import { bindActionCreators } from 'redux';


const FoodCard = ({ userType, foodItem, added, addFoodItemMessage }) => {
    let buttonTitle = "N/A";
    switch (userType) {
        case "business":
            buttonTitle = "Remove";
            break;
        case "consumer":
            buttonTitle = "Buy";
            break;
        case "messenger":
            buttonTitle = "Claim";
            break;
    }
    
    // if (added) {
    //     return (
    //         <View style={styles.card}>
    //             <View style={styles.imageCont}>
    //             </View>
    //             <View style={styles.rowContainer}>
    //                 <Text style={styles.foodItemText}>{foodItem.title} </Text>

    //                 <Text style={styles.foodPriceText}> - ${foodItem.price}</Text>
    //                 <View style={styles.spacer}></View>

    //                 <Button style={styles.ncrButton}
    //                     title="Remove"
    //                 />
    //             </View>
    //             <View style={styles.rowContainer}>
    //                 <Text style={styles.vendorText}>{foodItem.vendor} | </Text>
    //                 <Text style={styles.vendorText}>Qty: {foodItem.qty}</Text>
    //             </View>
    //         </View>
    //     );
    // } else {
        return (
            <View style={styles.card}>
                <View style={styles.imageCont}>

                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.foodItemText}>{foodItem.title} </Text>

                    <Text style={styles.foodPriceText}> - ${foodItem.price}</Text>
                    <View style={styles.spacer}></View>

                    <Button
                        style={styles.ncrButton}
                        title={buttonTitle}
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

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addFoodItemMessage,
    }, dispatch)
);

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#fdfffc",
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
        height: "20vh",
        marginTop: 2,
        marginBottom: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    spacer: {
        flexGrow: 2
    },
    rowContainer: {
        flexDirection: 'row'
    },
    foodItemText: {
        fontSize: 20,
        padding: 5
    },
    foodPriceText: {
        fontSize: 20,
        padding: 5
    },
    imageCont: {
        height: "50%"
    },
    ncrButton: {
        width: 97,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#2E7DF7",
        color: "white"
    },
});
export default connect(null, mapDispatchToProps)(FoodCard);