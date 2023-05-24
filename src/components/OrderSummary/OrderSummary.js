import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import "./OrderSummary.css";

const OrderSummary = (props) => {
    const {addedPdCart} = props;

    // calculating total price of selected items in cart
    const total = addedPdCart.reduce((preVal, curVal) => {
        return preVal + curVal.price;
    }, 0)

    return (
        <div className='order-sum'>
            <h1>Order Summary</h1>
            <div className='order-info'>
                <p>Selected items: {addedPdCart.length}</p>
                <p>Total Price: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span>  {total}</p>
                <p>Total Shipping Charge: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span> </p>
                <p>Total Tax: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span> </p>
                <h4>Grand Total: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span></h4>
            </div>
        </div>
    );
};

export default OrderSummary;