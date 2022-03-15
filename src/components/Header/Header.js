import React from 'react';
import Navbar from '../Navbar/Navbar';

import './Header.css'


const Header = (props) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>

            <img src={props.logo} width="150px" />
            <Navbar />



        </div>



    );
};

export default Header;