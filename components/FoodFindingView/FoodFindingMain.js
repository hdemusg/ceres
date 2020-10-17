import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import FoodCard from './FoodCard';

const mapStateToProps = (state, ownProps) => {
    const { foodItemsState } = state;
    return {
        availableItems: foodItemsState.availableItems,
        addedToCart: foodItemsState.addedToCart
    };
};


const renderCartItems = ({ item }) => {
    console.log("render cart items", item);
    <FoodCard foodItem={item} added={true} />
}
const renderAvailItems = ({ item }) => (
    <FoodCard foodItem={item} added={false} />
);

const FoodFindingMain = ({ navigation, availableItems, addedToCart }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Checkout"
                onPress={() => {
                    navigation.navigate('Cart', { cartItems: addedToCart });
                }}
            />
            <FlatList data={addedToCart} renderItem={renderCartItems} keyExtractor={item => item.id} extraData={renderCartItems} />
            <FlatList
                data={availableItems}
                renderItem={renderAvailItems}
                keyExtractor={item => item.id}
                style={styles.flatListView}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center",
        marginTop: StatusBar.currentHeight || 0,
    },
    Footer: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    doubleButton: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
export default connect(mapStateToProps)(FoodFindingMain);