import React, { useEffect, useState } from 'react';
import "./ProductsContainer.css";
import Product from '../Product/Product';

const ProductsContainer = (props) => {
    // loading products data
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
        <div className='products-con'>
            {
                products.map(product => <Product 
                    key={product.id} 
                    product={product}
                    handleAddToCart={props.handleAddToCart}
                ></Product>)
            }
        </div>
    );
};

export default ProductsContainer;