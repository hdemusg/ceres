import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Alert } from 'react-native';
import FoodCard from './FoodCard';



const FOODDATA = [
    {
        title: 'Chipotle Bowl',
        vendor: 'Chipotle',
        price: 15.00,
        time: '15 min',
        id: 1,
        stars: 5,
        qty: 1
    },
    {
        title: 'Veggie Sandwich',
        vendor: 'Subway',
        price: 5.00,
        time: '4 min',
        id: 2,
        stars: 5
    },
    {
        title: 'Spicy Chicken Sandwich',
        vendor: 'Chic Fil A',
        price: 7.00,
        time: '10 min',
        id: 3,
        stars: 4
    },
    {
        title: 'Spicy Chicken Sandwich',
        vendor: 'Chic Fil A',
        price: 7.00,
        time: '10 min',
        id: 3,
        stars: 4
    },
    {
        title: 'Spicy Chicken Sandwich',
        vendor: 'Chic Fil A',
        price: 123.456,
        time: '10 min',
        id: 3,
        stars: 4
    },
    {
        title: 'Spicy Chicken Sandwich',
        vendor: 'Chic Fil A',
        price: 7.00,
        time: '10 min',
        id: 3,
        stars: 4
    }
];

const FoodFindingMain = ({ navigation }) => {
    const renderItem = ({ item }) => (
        < FoodCard foodItem={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Next"
                onPress={() =>
                    navigation.navigate('Calculation')
                }
            />
            <FlatList
                data={FOODDATA}
                renderItem={renderItem}
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
export default FoodFindingMain;