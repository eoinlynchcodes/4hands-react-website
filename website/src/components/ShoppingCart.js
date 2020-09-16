import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {

	const cart = useContext(CartContext);
	console.log(cart);

	const getCartTotal = (cart) => {		
		let cartTotal = 0;
		for (var i = 0; i < cart.length; i++){
			cartTotal += cart[i].price;
			console.log(cart[i].price);
			console.log(cartTotal);
		}
		console.log('final total' + cartTotal);
		return cartTotal;
	};
	
	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}
			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal(cart)}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
