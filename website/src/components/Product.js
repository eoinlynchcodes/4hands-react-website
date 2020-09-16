import React from "react";
import "../css-files/product.css";
import { useHistory } from 'react-router-dom';

const Product = (props) => {

  return (
    <div className="product">
      <img src={props.product.image} />
      <h3>
        <u>{props.product.name}</u>
      </h3>
      <h5>{props.product.price}</h5>
      <h5>{props.product.size}</h5>

      <div>
        <button className="curiousButton" onClick={() => props.seeItem(props.product) }>Curious?</button>
        <button
          className="addButton"
          onClick={() => props.addItem(props.product)}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
