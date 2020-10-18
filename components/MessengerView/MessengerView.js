import React from "react";

export default class MessengerView extends Component {
    constructor(props) {
        super(props);
    }

    getFoodCards() {
        let temp = [{
            title: "temp",
            price: 0.00,
            vendor: "temp",
            qty: 0
        }];
        return <FoodCard foodItem={temp} />;
    }

    render() {
        return this.getFoodCards;
    }
}