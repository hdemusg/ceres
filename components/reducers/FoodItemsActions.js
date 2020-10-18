import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000";
export const addFoodItemMessage = foodItem => (
    {
        type: 'ADD_ITEM_TO_CART',
        payload: foodItem
    }
);

export const getDBItems = () => {
    const response = axios.get("/food");
    console.log("GetDBITEMS", response);
    return ({
        type: 'SET_DB_ITEMS',
        payload: response
    });
}