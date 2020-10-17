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
        }
    },
    { collection: "user" }
);

module.exports = mongoose.model("User", UserSchema);