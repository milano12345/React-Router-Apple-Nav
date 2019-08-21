import React from 'react';
import applelogo from '../Images/applelogo.png';
import magnify from '../Images/magnify.png';
import checkout from '../Images/checkout-logo.png';
import {Link} from 'react-router-dom';

function Navbar() {

    return (
        <div className='nav-wrapper'>
        <ul className='nav-bar'>
            <Link to='/' ><img className='apple-logo' src={applelogo} alt='apple-logo' /></Link>
            <Link to='/MacNavBar'>Mac</Link>
            <a>Ipad</a>
            <a>Iphone</a>
            <a>Watch</a>
            <a>TV</a>
            <a>Music</a>
            <a>Support</a>
            <img className='magnify-logo' src={magnify} alt='magnifying glass' />
            <img className='shopping-logo' src={checkout} alt='cart-logo'/>
        </ul>
        </div>
    )
}

export default Navbar;