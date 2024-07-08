import React from 'react'
import './index.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Input from '../../components/Input'

const CheckOut = () => {
  return (
    <div className='check'>
      <NavBar />
      <div className='checkout'>
            CheckOut
      </div>
    <a href='#' target='_self' rel='nonrefere' className='back'> Back to Shop </a>
      <Input />
      <Footer />
    </div>
  )
}

export default CheckOut
