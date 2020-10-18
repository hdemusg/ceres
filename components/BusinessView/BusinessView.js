import React from "react";
import { View } from 'react-native';

import { Component } from "react";
import FoodCard from "../FoodFindingView/FoodCard";
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000";

export default class BusinessView extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.fooditems = [];

        this.initialState = {
            title: "",
            price: "",
            vendor: props.route.params.vendorName,
            qty: ""
        };

        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        let sellableFoodItem = {
            title: this.state.title,
            price: this.state.price,
            vendor: this.state.vendor,
            qty: this.state.qty
        }
        this.fooditems.push(sellableFoodItem);
        axios.post('/food/produce', { title: this.state.title, price: this.state.price, vendor: this.state.vendor, qty: this.state.qty }, {headers:{"Content-Type":"application/json"}})
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })
        
        console.log(this.fooditems);
        this.forceUpdate();
        this.setState(() => this.initialState)
        event.preventDefault();
    }

    renderItems() {
        let count = 0;
        return this.fooditems.map((item) => {
            return <FoodCard userType="business" foodItem={item} key={"FoodCard" + count++} />;
        }
        );
    }

    render() {
        return (
            <View>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input style={{width: 250, height: 40, borderRadius: 8, backgroundColor: 'white',
    padding: 10, boxSizing: 'border-box', justifyContent: "center", boxShadow: "0 0 0 #A0DFFD", border: "1px #3C3C43",marginBottom: 30}} type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Price:
                        <input style={{width: 250, height: 40, borderRadius: 8, backgroundColor: 'white',
    padding: 10, boxSizing: 'border-box', justifyContent: "center", boxShadow: "0 0 0 #A0DFFD", border: "1px #3C3C43",marginBottom: 30}} type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Qty:
                        <input style={{width: 250, height: 40, borderRadius: 8, backgroundColor: 'white',
    padding: 10, boxSizing: 'border-box', justifyContent: "center", boxShadow: "0 0 0 #A0DFFD", border: "1px #3C3C43",marginBottom: 30}} type="text" name="qty" value={this.state.qty} onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <ul>
                    {this.renderItems()}
                </ul>
            </View>
        );
    }
}