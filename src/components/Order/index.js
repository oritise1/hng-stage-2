import React from 'react'
import './index.css'

const Order = () => {
    return (
        <div className='order'>
            <div className='list'>
                <div>
                    <h2 className='myOrder'>
                        Your Order
                    </h2>
                </div>
                <div className='orderList'>
                    <div className='order1'>
                        <h1 className='list1'>
                            Bellini Side Cab Chair X1
                        </h1>
                        <p className='list12' style={{ color: 'grey' }}>
                            $1950
                        </p>
                    </div> <br />
                    <div className='order1' style={{top:'50px',position:'absolute'}}>
                        <h1 className='list1'>
                            Bellini Side Cab Chair X1
                        </h1>
                        <p className='list12' style={{ color: 'grey' }}>
                            $1950
                        </p>
                    </div>
                    <div className='order1' style={{top:'100px',position:'absolute'}}>
                        <h1 className='list1'>
                            Bellini Side Cab Chair X1
                        </h1>
                        <p className='list12' style={{ color: 'grey' }}>
                            $1950
                        </p>
                    </div>
                    <div className='order1' style={{top:'170px',position:'absolute'}}>
                        <h1 className='list1'>
                            Bellini Side Cab Chair X1
                        </h1>
                        <p className='list12'>
                            $1950
                        </p>
                    </div>
                </div>
            </div>
            <div className='payment'>
                <h2>
                    Payment Method
                </h2>
                <form className='pay'>
                    <input type='radio' name='pay' required style={{marginBottom:'22px'}}/>
                    <label className='bank' style={{marginLeft:'12px'}}>
                        Bank Transfer
                    </label> <br />
                    <input type='radio' name='pay' required style={{marginTop:'32px'}}/>
                    <label className='card' style={{marginLeft:'12px'}}>
                        Bank Card
                    </label> <br />
                    <input type='radio' name='pay' required style={{marginTop:'32px'}}/>
                    <label className='cash' style={{marginLeft:'12px'}}>
                        Cash on Delivery
                    </label> <br />
                </form>
                <form className='agree' style={{marginTop:'32px'}}>
                <input type='radio' name='bank' required />
                    <label className='tick'>
                    I have read and agreed to  <span className='img' style={{fontSize:'10px'}}> TIMBU </span> Terms and Conditions and Privacy Policy.
                    </label>
                    </form>
            </div>
            <div>
                <button className='btn'> Complete Order </button>
            </div>
        </div>
    )
}

export default Order
