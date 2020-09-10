import React from "react";

const ShoppingBasketItem = (props) => {
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <button>Remove from cart</button>
      </div>
    </div>
  );
};

export default ShoppingBasketItem;
