import React from 'react'
import './index.css'
import ProductSide12 from '../../images/productSide12.svg';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { Link } from 'react-router-dom';

const Product1 = () => {
  return (
    <div className='deatils'>
      <div className='inner'>
        <div className='imdSide'>
          <img src={ProductSide12} alt='no product img' />
        </div>
        <div className='textSide'>
          <div className='sideHead'>
            <h2 className='sideH'>Artilleriet Chair</h2>
            <p className='sideP'>
            $2350
            </p>
          </div>
          <p className='story'>
          Embrace the timeless beauty of our Artilleriet Chair Collection. Each piece is meticulously crafted from reclaimed wood, imbued with the rich patina and unique imperfections that tell a story. Discover rustic charm and enduring character that will grace your home for generations to come.          </p>
          <div className='cartBtn'>
            <Link to='/cart' style={{textDecoration:'none'}}>
              <button className='btn1'>
               Add Cart 
              </button>
              </Link>
            <Link to='/checkout' style={{textDecoration:'none'}} >
            <button className='btn21'>
              <span style={{ marginTop: '6px' }}> Checkout </span> <Arrow />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product1
