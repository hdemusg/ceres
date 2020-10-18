const mongoose = require("mongoose");

const FoodItemSchema = mongoose.Schema(
    {
        title: {
            type: String,
        }, 
        price: {
            type: Number,
        }, 
        vendor: {
            type: String,
        }, 
        qty: {
            type: Number,
        }, 
        claimed: {
            type: Boolean
        }
    },
    { collection: "fooditem" }
);

module.exports = mongoose.model("FoodItem", FoodItemSchema);