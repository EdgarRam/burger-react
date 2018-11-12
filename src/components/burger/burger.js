
import React from 'react';


import classes from './burger.css'
import BurgerIngredient from './burgerIngredient/burgerIngredient';

const Burger = ( props ) =>{
    let transformedIngredients = Object.keys( props.ingredients)
                                        .map( igKey =>
                                            [ ...Array( props.ingredients[igKey] ) ].map( (val,i) =>
                                                <BurgerIngredient key={igKey + i} type={igKey} />
                                            )
                                        )
                                        .reduce( ( prev, current) => prev.concat( current ), [] );

    console.log( transformedIngredients );
    if( transformedIngredients.length  === 0){
        transformedIngredients = <p>Please start adding ingrendients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}


export default Burger;