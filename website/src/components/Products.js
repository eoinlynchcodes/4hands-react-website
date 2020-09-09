import React, { useContext } from 'react';

// Components
import Product from './Product';
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
	const { products, addItem, seeItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
					seeItem={seeItem}
				/>
			))}
		</div>
	);
};

export default Products;
