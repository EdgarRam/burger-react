
import React, { Component } from 'react';
import Aux from './../../hoc/aux';
import Burger from './../../components/burger/burger';
import BuildControls from './../../components/burger/buildControls/buildControls';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6,
};

export class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[ type ];
        const updatedCounted = oldCount + 1;
        const updatedIngredients ={ ...this.state.ingredients };

        updatedIngredients[ type ] = updatedCounted;
        const priceAddittion =INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddittion;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });

    }

    removeIngredientHandler = type => {

    }

    render(){
        return(
            <Aux>
                <Burger ingredients ={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                />
            </Aux>
        );
    }
}
