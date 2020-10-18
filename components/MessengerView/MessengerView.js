import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
// import FoodCard from './FoodCard';
import { Header } from '../Header';
import { getDBItems } from '../reducers/FoodItemsActions';
import { bindActionCreators } from 'redux';
import axios from 'axios';

// const mapStateToProps = (state, ownProps) => {
//     const { foodItemsState } = state;
//     if (foodItemsState.availableItems.length == 0) {
//         return {
//             availableItems: getDBItems(),
//             addedToCart: []
//         };
//     } else {
//         return {
//             availableItems: foodItemsState.availableItems,
//             addedToCart: foodItemsState.addedToCart,
//         };
//     }
// };

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
// const renderCartItems = ({ item }) => {
//     console.log("render cart items", item);

//     <FoodCard userType="consumer" foodItem={item} added={true} />
// }
const renderAvailItems = ({ item }) => (
    <FoodCard userType="consumer" foodItem={item} added={false} />
);

export class FoodFindingMain extends React.Component {
    constructor (props) {
        super(props);
        this.initialState = {
            jsonName: props.route.params.userJson.name
        }
    }
    state = {
        availableItems: [],
        addedToCart: []
    }
    componentDidMount () {
        axios.get("http://localhost:3000/trans/")
        .then(res => {
            const items = res.data;
            this.setState({availableItems: items});
        })
    }



    render() {

        return (
            <SafeAreaView style={{ display: "flex",alignContent: "center",marginTop: StatusBar.currentHeight || 0,}}>
                <Header name={this.state.jsonName} />
                <Button style={{width: 97,height: 40,borderRadius: 8,backgroundColor: "#2E7DF7",color: "white",}}
                    title="Deliver"
                    onPress={() => {
                        navigation.navigate('Cart', { cartItems: addedToCart });
                    }}
                />
                {/* <FlatList data={addedToCart} renderItem={renderCartItems} keyExtractor={item => item.id} extraData={renderCartItems} /> */}
                <FlatList
                    data={this.state.availableItems}
                    renderItem={renderAvailItems}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
            
    }
}