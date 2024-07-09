import React from 'react'
import './index.css'
import ProductSide10 from '../../images/productSide10.svg';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { Link } from 'react-router-dom';

const Product1 = () => {
  return (
    <div className='deatils'>
      <div className='inner'>
        <div className='imdSide'>
          <img src={ProductSide10} alt='no product img' />
        </div>
        <div className='textSide'>
          <div className='sideHead'>
            <h2 className='sideH'>Dixie B Chair</h2>
            <p className='sideP'>
            $1150
            </p>
          </div>
          <p className='story'>
          Embrace the timeless beauty of our Dixie B Chair Collection. Each piece is meticulously crafted from reclaimed wood, imbued with the rich patina and unique imperfections that tell a story. Discover rustic charm and enduring character that will grace your home for generations to come.          </p>
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

export default Product1
