const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//require("dotenv/config");
require('dotenv').config({ path: './.env' });
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true}, err => {
    if(err) {
        console.log(err);
    }
});

const usersRoute = require("./routes/users");
app.use("/users", usersRoute);

const foodRoute = require("./routes/food");
app.use("/food", foodRoute);

const transRoute = require("./routes/transaction");
app.use("/trans", transRoute);

app.listen(3000);