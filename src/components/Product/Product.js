import React from 'react'
import './Product.css'
import { ReactComponent as Filter } from '../../images/filter.svg';
import { ReactComponent as CaretDown } from '../../images/caretdown.svg';
import Product1 from '../../images/product1.svg';
import Product2 from '../../images/product2.svg';
import Product3 from '../../images/product3.svg';
import Product4 from '../../images/product4.svg';
import Product5 from '../../images/product5.svg';
import Product6 from '../../images/product6.svg';
import Product7 from '../../images/product7.svg';
import Product8 from '../../images/product8.svg';
import Product9 from '../../images/product9.svg';
import Product10 from '../../images/product10.svg';
import Product11 from '../../images/product11.svg';
import Product12 from '../../images/product12.svg';
import Product13 from '../../images/product13.svg';
import Product14 from '../../images/product14.svg';
import Product15 from '../../images/product15.svg';
import ProductCard from '../ProductCard/ProductCard';

const Product = () => {
    return (
        <div style={{ top: '800px', left: '80px', position: 'absolute' }}>
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
                    <CaretDown className='caretImg' />
                </div>
            </div>
            <div className='productList'>
                <div>
                    <ProductCard
                        productImg={Product1}
                        h1='Dixie B Chair'
                        p='$1750'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product2}

                        h1='Bellini Side Cab Chair'
                        p='$1250'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product3}

                        h1='Old world Revival Chair'
                        p='$1950'
                    />
                </div>
            </div>
            <div className='productList' style={{ top: '544px' }}>
                <div>
                    <ProductCard
                        productImg={Product4}

                        h1='Torch Chair {Wood Seat}'
                        p='$750'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product5}

                        h1='Timbu Mahogany Chair'
                        p='$1150'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product6}

                        h1='Chaise Noyar Chair'
                        p='$2350'
                    />
                </div>
            </div>
            <div className='productList' style={{ top: '1088px' }}>
                <div>
                    <ProductCard
                        productImg={Product7}

                        h1='Fautelli De Table'
                        p='$7150'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product8}

                        h1='Pirelli Special Chair'
                        p='$2150'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product9}

                        h1='Brute Wood Chair'
                        p='$2350'
                    />
                </div>
            </div>
            <div className='productList' style={{ top: '1632px' }}>
                <div>
                    <ProductCard
                        productImg={Product10}

                        h1='Dixie B Chair'
                        p='$1150'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product11}

                        h1='IKEA Flagship Chair'
                        p='$9150'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product12}

                        h1='Artilleriet Chair'
                        p='$2350'
                    />
                </div>
            </div>
            <div className='productList' style={{ top: '2176px' }}>
                <div>
                    <ProductCard
                        productImg={Product13}

                        h1='Daniela Chair'
                        p='$2150'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product14}

                        h1='Betty Ritual Chair'
                        p='$5350'
                    />
                </div>
                <div>
                    <ProductCard
                        productImg={Product15}

                        h1='Lacquered Solid Oak'
                        p='$4550'
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
