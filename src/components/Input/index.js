import React from 'react'
import './index.css'

const Input = () => {
  return (
    <div className='input'>
      <h2 className='inputHead'> Shipping Information</h2>
      <div className='inputField'>
        <form>
            <label for='fname'>
                First name
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label for='fname'>
                Last name
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label for='fname'>
                Country/Region
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label for='fname'>
                Address
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label for='fname'>
                City
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label for='fname'>
                State
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label for='fname'>
                Email
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
            <label for='fname'>
                Phone
            </label><br />
            <input type ='text' className='fname' name='fname' required/> <br />
        </form>
      </div>
    </div>
  )
}

export default Input
