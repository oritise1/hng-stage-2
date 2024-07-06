import React from 'react'
import './ProductCard.css'


const ProductCard = (props) => {
    return (
        <div className='cardFrame'>
            <div>
                <img src={props.productImg} alt='no product' className='cardImg'/>
                <img src={props.cartImg} alt='no cardCart' className='cardCart'/>
            </div >
            <div className='cardDetail'>
                <h2 className='cardH2'>
                    {props.h1}
                </h2>
                <p className='cardP'>
                    {props.p}
                </p>
            </div>
        </div>
    )
}

export default ProductCard
