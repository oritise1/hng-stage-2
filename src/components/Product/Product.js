import React from 'react'
import './Product.css'
import { ReactComponent as Filter } from '../../images/filter.svg';
import { ReactComponent as CaretDown } from '../../images/caretdown.svg';
import Product1 from  '../../images/product1.svg';
import CardCart from  '../../images/cardCart.svg';
import ProductCard from '../ProductCard/ProductCard';

const Product = () => {
    return (
        <div style={{top:'800px', left:'80px', position:'absolute'}}>
            <h3 className='prodHead'>
                All Products
            </h3>
            <div className='productFilter'>
                <div className='filter'>
                    <Filter className='filterImg' />
                    <h3 className='filterText'>Filter</h3>
                </div>
                <div className='caret'>
                    <h3 className='caretText'>
                    Sort: Latest Products
                    </h3>
                    <CaretDown className='caretImg'/>
                </div>
            </div>
            <div className='productList'>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
            </div>
            <div className='productList' style={{top:'544px'}}>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
            </div>
            <div className='productList' style={{top:'1088px'}}>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
            </div>
            <div className='productList' style={{top:'1632px'}}>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
            </div>
            <div className='productList' style={{top:'2176px'}}>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
                <div>
                <ProductCard 
                    productImg={Product1}
                    cartImg={CardCart}
                    h1='hello'
                    p='$1650'
                />
                </div>
            </div>
            <div className='explore'>
                Explore more products
            </div>
        </div>
    )
}

export default Product
