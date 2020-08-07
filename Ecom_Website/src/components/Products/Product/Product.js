import React from 'react';

import classes from './Product.module.css';

const product = (props) => {
    const cssClasses = [classes.num__box, props.value === 0 ? classes.zero: classes.blue];
    let val;
    {props.value === 0 ? val = 'Zero' : val = props.value}
    return (
        <div className={classes.product}>
            <div className={cssClasses.join(' ')}>
            <p>{val}</p>
            </div>
            <button className={classes.increment} onClick={() => props.clickIncrement(props.id)}>Increment</button>
            <button className={classes.delete} onClick={() => props.clickDelete(props.id)}>Delete</button>
        </div>
    )
}

export default product;