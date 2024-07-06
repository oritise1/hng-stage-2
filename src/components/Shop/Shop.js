import React from 'react'
import './Shop.css'
import ShopIcon from '../../images/shopImg.svg';

const Shop = () => {
  return (
    <div className='shopWrapper'>
        <img src={ShopIcon} alt='no shop' />
        <h2 className='shopText'>
            Shop
        </h2>
    </div>
  )
}

export default Shop
