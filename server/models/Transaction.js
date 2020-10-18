const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
    {
        item: {
            type: String,
        }, 
        cost: {
            type: Number,
        }, 
        delivered: {
            type: Boolean,
        },
        messenger: {
            type: String,
        },
        card: {
            type: String,
        },
        buyer: {
            type: String
        }
    },
    { collection: "transaction" }
);

module.exports = mongoose.model("Transaction", TransactionSchema);