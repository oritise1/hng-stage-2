import React from 'react'
import './index.css'
import ProductSide1 from '../../images/productSide1.svg';
import { ReactComponent as Arrow} from '../../images/arrow.svg';

const Product1 = () => {
  return (
    <div className='deatils'>
      <div className='inner'>
        <div className='imdSide'>
          <img src={ProductSide1} alt='no product img' />
        </div>
        <div className='textSide'>
          <div className='sideHead'>
            <h2 className='sideH'>Old world revival Chair</h2>
            <p className='sideP'>
              $1950
            </p>
          </div>
          <p className='story'>
            Embrace the timeless beauty of our Old world Chair Collection. Each piece is meticulously crafted from reclaimed wood, imbued with the rich patina and unique imperfections that tell a story. Discover rustic charm and enduring character that will grace your home for generations to come.
          </p>
          <div className='cartBtn'>
            <button className='btn1'>
                Add Cart
            </button>
            <button className='btn2'>
               <span style={{marginTop:'6px'}}> Checkout</span> <Arrow/>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product1
