import React from 'react';
import Aux from './../../hoc/aux';

import classes from './layout.css'

const Layout = ( props ) => (
    <Aux>
        <div>Toolbar, sideDrawe, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);


export default Layout;