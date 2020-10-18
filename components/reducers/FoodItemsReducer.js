import { combineReducers } from 'redux';
import axios from 'axios';
//TODO understand initState behaviors from database and implement
const initState = {
    availableItems: [
        // {
        //     title: 'Chipotle Bowl',
        //     vendor: 'Chipotle',
        //     price: 15.23,
        //     time: '15 min',
        //     id: 1,
        //     stars: 5,
        //     qty: 1
        // },
        // {
        //     title: 'Veggie Sandwich',
        //     vendor: 'Subway',
        //     price: 5.00,
        //     time: '4 min',
        //     id: 2,
        //     stars: 5
        // },
        // {
        //     title: 'Spicy Chicken Sandwich',
        //     vendor: 'Chic Fil A',
        //     price: 7.00,
        //     time: '10 min',
        //     id: 3,
        //     stars: 4
        // },
        // {
        //     title: 'Spicy Chicken Sandwich',
        //     vendor: 'Chic Fil A',
        //     price: 7.00,
        //     time: '10 min',
        //     id: 4,
        //     stars: 4
        // },
        // {
        //     title: 'Spicy Chicken Sandwich',
        //     vendor: 'Chic Fil A',
        //     price: 123.456,
        //     time: '10 min',
        //     id: 5,
        //     stars: 4
        // },
        // {
        //     title: 'Spicy Chicken Sandwich',
        //     vendor: 'Chic Fil A',
        //     price: 7.00,
        //     time: '10 min',
        //     id: 6,
        //     stars: 4
        // }
    ],
    addedToCart: []
};

const FoodItemsReducer = (state = initState, action) => {
    const { availableItems, addedToCart } = state;
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            console.log(action.payload);

            axios.post("/trans/purchase", {item: action.payload._id, cost: action.payload.price, buyer:"User"})


            let index = availableItems.indexOf(action.payload);
            if (index >= 0) {
                const returnedItem = availableItems.splice(index, 1)[0];
                addedToCart.push(returnedItem);
            } else {
                console.log(index, action.payload.title, " nonexists?");
            }
            const newState = { availableItems, addedToCart }
            return newState;
            break;
        case 'SET_DB_ITEMS':
            const p = action.payload;
            return { p, addedToCart}
            break;
        default:
            return state;
    }
}

export default combineReducers({ foodItemsState: FoodItemsReducer });