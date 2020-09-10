import React, { useState } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

// Data
import data from "./data/products";

// Contexts
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import MoreOnProduct from "./components/MoreOnProduct";
import ShoppingBasket from "./components/ShoppingBasket";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  const [itemToSee, setItemToSee] = useState([]);

  const history = useHistory();

  const seeItem = (item) => {
    setItemToSee([...itemToSee, item]);
    history.push("/curious");
  };

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem, seeItem }}>
        <CartContext.Provider value={cart}>
          <Route exact path="/">
            <Navigation />
            <About />
            <Products />
          </Route>

          <Route exact path="/curious">
            <Navigation/>
            <MoreOnProduct/>
          </Route>

        <Route exact path="/cart">
        <Navigation /> 
        <ShoppingBasket/> 
        </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
