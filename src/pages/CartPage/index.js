import React from 'react'
import './index.css'
import ProductSide1 from '../../images/productSide1.svg';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className='page'>
      <div className='midPage'>
        <h1 className='midHead'> Cart </h1>
        <div className='midImg'>
          <img src={ProductSide1} alt='no product img' style={{ objectFit: 'fill' }} className='midImg' />
        </div>
        <div className='midText'>
          <h2 className='midH'> Old world revival Chair</h2>
          <p className='midP'> $1950 </p>
          <form className='qual'>
            <label className='qualLab'> Quality </label>
            <input type='text' className='qualText' defaultValue={1} />
          </form>
        </div>
        <Link to='/checkout' style={{textDecoration:'none'}} >
            <button className='btn2'>
              <span style={{ marginTop: '6px' }}> Checkout </span> <Arrow />
            </button>
            </Link>
      </div>
      <div className='x'>
        <Link to='/' style={{textDecoration:'none'}}>
        &times;
        </Link>
      </div>
    </div>
  )
}

export default CartPage
