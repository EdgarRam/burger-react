import React from 'react';

import classes from './buildControls.css';
import BuildControl from './buildControl/buildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = ( props ) => (

    <div className={classes.BuildControls}>
        {controls.map( ctrl =>
            <BuildControl  
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded( ctrl.type )}
            />
        )}
    </div>
);


export default BuildControls;