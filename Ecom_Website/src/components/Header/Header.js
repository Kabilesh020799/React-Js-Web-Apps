import React from 'react';
import classes from './Header.module.css'

const header = (props) => (
    <div className={classes.head}>
        <h1 className = {classes.text}>Counter</h1>
        <div className={classes.icon}><i className="fas fa-shopping-cart"></i>
<div className={classes.badge} id={classes.lblCartCount}>{props.total}</div>
        </div>
    </div>
)

export default header;