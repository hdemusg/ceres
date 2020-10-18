const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        role: {
            type: String,
        }, 
        email: {
            type: String,
        }, 
        password: {
            type: String,
        }, 
        name: {
            type: String,
        }, 
        balance: {
            type: Number,
        }
    },
    { collection: "user" }
);

module.exports = mongoose.model("User", UserSchema);