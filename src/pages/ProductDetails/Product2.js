import React from 'react'
import './index.css'
import ProductSide2 from '../../images/productSide2.svg';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { Link } from 'react-router-dom';

const Product2 = () => {
  return (
    <div className='deatils'>
      <div className='inner'>
        <div className='imdSide'>
          <img src={ProductSide2} alt='no product img' />
        </div>
        <div className='textSide'>
          <div className='sideHead'>
            <h2 className='sideH'>Bellini Side Cab Chair</h2>
            <p className='sideP'>
            $1250
            </p>
          </div>
          <p className='story'>
          Embrace the timeless beauty of our Old world Chair Collection. Each piece is meticulously crafted from reclaimed wood, imbued with the rich patina and unique imperfections that tell a story. Discover rustic charm and enduring character that will grace your home for generations to come.          </p>
          <div className='cartBtn'>
            <div>
              <button className='btn1'>
                Add Cart
              </button>
            </div>
            <button className='btn21'>
              <span style={{ marginTop: '6px' }}> <Link to='/checkout' >Checkout </Link></span> <Arrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product2
