import React, { useState } from 'react';
import Product from './Product';

const ProductContainer = ({data}) =>{
    return (
        <main>
    <div className='mevarylevar row'>
    {data.length > 0 && data.map((product,i) =>{
       return  <Product key={i} product={product}/>
    })}
    </div>
        </main>
    )

}

export default ProductContainer;