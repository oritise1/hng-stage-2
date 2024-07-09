import React from 'react'
import './index.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Input from '../../components/Input'
import Order from '../../components/Order'

const CheckOut = () => {
  return (
    <div className='check'>
      <NavBar />
      <div className='checkout'>
            <h1>CheckOut</h1>
            <p>Have a Coupon ? Click here to enter the code</p>
      </div>
        <a href='#' target='_self' rel='nonrefere' className='back'> Back to Shop </a>
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
