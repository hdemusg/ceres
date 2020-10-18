// import React from 'react';

//
// const DATA = [
//     {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//     },
//     {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//     },
//     {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//     },
// ];
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import FoodCard from './FoodCard';

const mapStateToProps = (state, ownProps) => {
    const { foodItemsState } = state;
    console.log(foodItemsState);
    return {
        availableItems: foodItemsState.availableItems,
        addedToCart: foodItemsState.addedToCart,
    };
};

// const Item = ({ title }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//     </View>
// );

// const FoodFindingMain = () => {
//     const renderItem = ({ item }) => (
//         <Item title={item.title} />
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={DATA}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//             />
//         </SafeAreaView>
//     );
// }
// export default FoodFindingMain;
const renderCartItems = ({ item }) => {
    console.log("render cart items", item);
    <FoodCard foodItem={item} added={true} />
}
const renderAvailItems = ({ item }) => (
    <FoodCard foodItem={item} added={false} />
);

const FoodFindingMain = ({ navigation, availableItems, addedToCart, total }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Button style={style.ncrButton}
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
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    ncrButton: {
        width: 97,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#2E7DF7",
        color: "white",
    },
    doubleButton: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
export default connect(mapStateToProps)(FoodFindingMain);
