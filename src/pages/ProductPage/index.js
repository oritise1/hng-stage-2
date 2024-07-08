import React from 'react'
import './index.css'
import Shop from '../../components/Shop/Shop';
import NavBar from '../../components/NavBar/NavBar'
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';

const ProductList = () => {
    return (
        <div className='here'>
            <NavBar />
            <Shop />
            <Product />
            <Footer />
        </div>
    )
}

export default ProductList
