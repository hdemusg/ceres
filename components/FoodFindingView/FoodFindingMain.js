import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import FoodCard from './FoodCard';



const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '123',
        title: 'Fourth Item',
    },
    {
        id: '456',
        title: 'Fifth Item',
    },
    {
        id: '456',
        title: 'Fifth Item',
    },
    {
        id: '456',
        title: 'Fifth Item',
    },
    {
        id: '456',
        title: 'Fifth Item',
    },
    {
        id: '456',
        title: 'Fifth Item',
    },
    {
        id: '456',
        title: 'Fifth Item',
    },

];

const FOODDATA = [
    {
        title: 'Chipotle Bowl',
        vendor: 'Chipotle',
        price: 15.00,
        time: '15 min',
        id: 1,
        stars: 5
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

// const Item = ({  }) => (
//     <View style={styles.item}>
//         <FoodCard foodItem={title} />
//         {/* <Text style={styles.title}>{title}</Text> */}
//     </View>
// );

const FoodFindingMain = () => {
    const renderItem = ({ item }) => (
        < FoodCard foodItem={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={FOODDATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default FoodFindingMain;