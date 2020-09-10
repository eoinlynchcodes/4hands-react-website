import React, { useState } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// CSS
import "./App.css";
import "./css-files/LeftContainer.css";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import MenuContainer from "./Containers/MenuContainer";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";
import Item from './components/ShoppingCartItem';

// Data
import data from "./data/products";

// Contexts
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import MoreOnProduct from "./components/MoreOnProduct";


function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  const [itemToSee, setItemToSee] = useState([]);

  const seeItem = (item) => {
    setItemToSee([...itemToSee, item]);
  };

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem, seeItem }}>
        <CartContext.Provider value={cart}>
          
          <Route exact path="/" component={Navigation} />
          <Route exact path="/" component={About} />
          <Route exact path="/"
            render={() => <Products products={products} addItem={addItem} seeItem={seeItem} />}
          />

          <Route exact path="/curious" component={Navigation} />
          <Route exact path="/curious" component={MoreOnProduct} />

          <Route 
          exact path="/cart"
            render={() => <ShoppingCart cart={cart} />}
            component={Navigation} />
          <Route 
          exact path="/cart"
            render={() => <ShoppingCart cart={cart} />}
            component={ShoppingCart} />

        </CartContext.Provider>
      </ProductContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
