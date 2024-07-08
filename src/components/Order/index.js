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
                    <div className='order1' style={{top:'200px',position:'absolute'}}>
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
                
            </div>
        </div>
    )
}

export default Order
