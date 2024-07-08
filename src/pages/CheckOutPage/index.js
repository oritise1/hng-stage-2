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
            CheckOut
      </div>
    <a href='#' target='_self' rel='nonrefere' className='back'> Back to Shop </a>
      <Input />
      <Order />
      <Footer />
    </div>
  )
}

export default CheckOut
