import React, { useState } from 'react';
import "./Shop.css";
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import OrderSummary from '../OrderSummary/OrderSummary';

const Shop = () => {

    // contains products added to cart 
    const [addedPdCart, setAddedProductsCart] = useState([]);

    // event handler for add to cart
    const handleAddToCart = (product) => {
        
        //updating cart with preValue and adding new value
        setAddedProductsCart([...addedPdCart, product]); 
    }

    return (
        <div className='shop'>
            {/* Left Part */}
            <ProductsContainer handleAddToCart={handleAddToCart}></ProductsContainer>


            {/* right part */}
            <OrderSummary addedPdCart={addedPdCart}></OrderSummary>
        </div>
    );
};

export default Shop;