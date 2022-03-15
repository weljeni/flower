import React from 'react';
import './Navbar.css'

const Navbar = ({ flower }) => {
    return (
        <div className='navbar'>
            <h5>Our points</h5>
            <h5 style={{
                marginLeft: '20px',
                marginRight: '20px'
            }}>Shipping and payment</h5>
            <h5>Our contacts</h5>

        </div>
    );
};

export default Navbar;