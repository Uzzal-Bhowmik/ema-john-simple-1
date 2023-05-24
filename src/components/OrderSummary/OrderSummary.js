import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import "./OrderSummary.css";
import { addFromArray } from '../../utilities/calculatingVal';

const OrderSummary = (props) => {
    const {addedPdCart} = props;

    // calculating total price of selected items in cart
    const totalPrice = addFromArray(addedPdCart, "price");
    const totalShipping = addFromArray(addedPdCart, "shipping");
    const tax = (totalPrice * 0.1).toFixed(2); // 10% of total price
    const grandTotal = totalPrice + totalShipping + tax;
    

    return (
        <div className='cart-container'>
            <div className='order-sum'>
                <h1>Order Summary</h1>
            <div className='order-info'>
                <p>Selected items: {addedPdCart.length}</p>
                <p>Total Price: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span>  {totalPrice}</p>
                <p>Total Shipping Charge: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span>{totalShipping} </p>
                <p>Total Tax:<span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span>{tax}</p>
                <h4>Grand Total: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span> {parseFloat(grandTotal).toFixed(2)}</h4>
            </div>
            </div>
        </div>
    );
};

export default OrderSummary;