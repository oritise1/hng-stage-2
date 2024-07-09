import React from 'react'
import './index.css'

const Input = () => {
  return (
    <div className='input'>
      <h2 className='inputHead'> Shipping Information</h2>
      <div className='inputField'>
        <form>
            <label id='fname'>
                First name
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label id='fname'>
                Last name
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label id='fname'>
                Country/Region
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label id='fname'>
                Address
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label id='fname'>
                City
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label id='fname'>
                State
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label id='fname'>
                Email
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label id='fname'>
                Phone
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
        </form>
      </div>
    </div>
  )
}

export default Input
