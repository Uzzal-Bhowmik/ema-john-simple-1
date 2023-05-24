import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.png";

const Header = () => {
    return (
        <div>
            <nav>
                <div className='nav-content'>
                    <div>
                        <img src={logo} alt="logo" width="80%" />
                    </div>

                    <div className='nav-links'>
                        <a href="/order">Order</a>
                        <a href="/review">Order Review</a>
                        <a href="/inventory">Manage Inventory</a>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;