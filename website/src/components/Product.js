import React from 'react';

const Product = props => {
    return (
        <div>
            {/* <img src={props.product.img} /> */}

            <h1>{props.product.price}</h1>

            <button onClick={() => props.addItem(props.product)}>
                Add to Basket
            </button>
        </div>
    );
    };

export default Product;