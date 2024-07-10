import React from 'react'
import './index.css'
import NavBar from '../../components/NavBar/NavBar'
import Input from '../../components/Input'
import Order from '../../components/Order'
import { Link } from 'react-router-dom'

const CheckOut = () => {
  return (
    <div className='check'>
      <NavBar />
      <div className='checkout'>
            <h1>CheckOut</h1>
            <p>Have a Coupon ? Click here to enter the code</p>
      </div>
        <Link to='/' className='back'> Back to Shop </Link>
      <Input />
      <Order />
      <div className='checkFoot'>
      &copy;
                <span className='img' style={{fontSize:'20px'}}>  TIMBU </span>
                <span className='footL'>2024</span>  
      </div>
    </div>
  )
}

export default CheckOut
