import React, { useContext } from 'react';
import '../css-files/Nav.css';
import { CartContext } from '../contexts/CartContext';

function Navigation(){

  const cart = useContext(CartContext);

    return (
        <div className="topnav" id="myTopnav">
        <a href="#home" className="active">4 Hands Food Studio</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#takeaways">Takeaways</a>
        <a href="#blog">Blog</a>
        {/* <a href="javascript:void(0);" classNameName="icon" onClick={resizeNav()}>
          <i className="fa fa-bars"></i>
        </a> */}
        <span>{cart.length}</span>
      </div>
    )
}

export default Navigation;