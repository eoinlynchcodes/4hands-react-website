import React from 'react';
import Navigation from '../components/Navigation';
import MoreContainer from '../components/MoreContainer';
import { ProductContext } from '../contexts/ProductContext';

const MoreOnProduct = () => {
    const { products, addItem, seeItem } = useContext(ProductContext);

    console.log(seeItem);

    return (
        <div>
            <h1>Data on the product..</h1>
            <MoreContainer 
            seeItem={seeItem}
            />
        </div>
    );
};

export default MoreOnProduct;