import React from "react";
import { View } from 'react-native';

import { Component } from "react";
import FoodCard from "../FoodFindingView/FoodCard";

export default class BusinessView extends Component {
    constructor(props) {
        super(props);
        this.fooditems = [];

        this.initialState = {
            title: "",
            price: "",
            vendor: "",
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
        this.fooditems.push({
            title: this.state.title,
            price: this.state.price,
            vendor: this.state.vendor,
            qty: this.state.qty
        });
        console.log(this.fooditems);
        this.forceUpdate();
        this.setState(() => this.initialState)
        event.preventDefault();
    }

    renderItems() {
        let count = 0;
        return this.fooditems.map((item) => {
            count++;
            return <FoodCard foodItem={item} key={"FoodCard" + count} />;
        }
        );
    }

    render() {
        return (
            <View>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Vendor:
                        <input type="text" name="vendor" value={this.state.vendor} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Title:
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Price:
                        <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Qty:
                        <input type="text" name="qty" value={this.state.qty} onChange={this.handleChange} />
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
