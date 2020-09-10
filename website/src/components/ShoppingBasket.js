import React, { useContext } from "react";

import ShoppingBasketItem from "./ShoppingBasketItem";
import { CartContext } from "../contexts/CartContext";

const ShoppingBasket = () => {

  const cart = useContext(CartContext);

  const getCartTotal = () => {
    return cart.reduce((acc, value) => {
        return acc + value.price;
      }, 0).toFixed(2);
  };

  console.log("shooping cart works");

  return (
    <div>
      {cart.map(item => {
        return <ShoppingBasketItem key={item.id} {...item} />;
      })}
      <div>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
