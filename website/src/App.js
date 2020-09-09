import React, { useState } from "react";
import "./App.css";
import "./css-files/LeftContainer.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from './components/Products';
import kimchi from "./images/kimchi";
import kombucha from "./images/kombucha";
import MenuContainer from "./Containers/MenuContainer";
import takeaway from "./images/takeaway";
import whitekraut from "./images/whitekraut";
import redkraut from "./images/redkraut";
import rose from "./images/rose";
import margaux from "./images/margaux";
import data from "./data/products";
import { BrowserRouter as Router } from "react-router-dom";
import Product from "./components/Product";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [ cart, setCart ] = useState([]);
  
  const addItem = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  }

  return (
    <div className="App">
      <ProductContext.Provider value={{products, addItem}}>
        <CartContext.Provider value={cart}>
        <Navigation />
        <About />
      <Products/>
        </CartContext.Provider>
      </ProductContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
