import React from 'react';
import Product from './Product/Product'

import classes from './Products.module.css';

const products = (props) => (
    <div className={classes.products}>
        {props.products.map(prod => <Product key={prod.id} id={prod.id} value = {prod.total} clickIncrement={props.clickIncrement} clickDelete={props.clickDelete}/>)}
    </div>
)

export default products;