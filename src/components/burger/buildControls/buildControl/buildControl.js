import React from 'react';

import classes  from './buildControl.css';

const BuildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>less</button>
        <button 
            className={classes.More}
            onClick={props.added}
            >More</button>
    </div>
)

export default BuildControl;