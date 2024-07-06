import React from 'react'
import './NavBar.css'
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { ReactComponent as ProfileIcon } from '../../images/profile.svg';
import { ReactComponent as WishlistIcon } from '../../images/wishlist.svg';
import { ReactComponent as CartIcon } from '../../images/cart.svg';

const NavBar = () => {
    return (
        <div className='navWrapper'>
            <div className='navImg'>
                <h1 className='img'> TIMBU </h1>
            </div>
            <ul className='navList'>
                <li style={{width:'62px', height:'35px'}}> Home </li>
                <li style={{width:'87px', height:'35px'}}> Products </li>
                <li style={{width:'53px', height:'35px'}}> Shop </li>
                <li style={{width:'62px', height:'35px'}}> About </li>
                <li style={{width:'107px', height:'35px'}}> Contact us </li>
            </ul>
            <div className='navIcon'>
                <SearchIcon />
                <ProfileIcon />
                <WishlistIcon />
                <CartIcon />
            </div>
        </div>
    )
}

export default NavBar
