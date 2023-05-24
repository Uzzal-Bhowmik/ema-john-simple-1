import React, { useEffect, useState } from 'react';
import "./Shop.css";
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import OrderSummary from '../OrderSummary/OrderSummary';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

     // loading products data
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])



    // contains products added to cart 
    const [addedPdCart, setAddedProductsCart] = useState([]);

    // event handler for add to cart
    const handleAddToCart = (product) => {
        
        //updating cart with preValue and adding new value
        setAddedProductsCart([...addedPdCart, product]);

        //adding or updating cart in local storage
        addToDb(product.id);
    }

    // get the local storage data
    // useEffect is used since function loads data from     local-storage/external source.
    useEffect(()=> {    
        const addedPdIdLS = getShoppingCart();
        
        for(const id in addedPdIdLS) {
            const addedPdCartLS = products.find(pd => pd.id === id)
        }


    }, [])

    return (
        <div className='shop'>
            {/* Left Part */}
            <ProductsContainer handleAddToCart={handleAddToCart} products={products}></ProductsContainer>


            {/* right part */}
            <OrderSummary addedPdCart={addedPdCart}></OrderSummary>
        </div>
    );
};

export default Shop;