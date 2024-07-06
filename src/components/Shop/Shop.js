import React from 'react'
import './Shop.css'
import { ReactComponent as ShopIcon } from '../../images/shopImg.svg';

const Shop = () => {
  return (
    <div className='shopWrapper'>
        <ShopIcon />
        <h2 className='shopText'>
            Shop
        </h2>
    </div>
  )
}

export default Shop
