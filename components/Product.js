import React, { useState } from 'react';
import Link from 'next/link'

const Product = ({product}) =>{
    return (
      <Link href={`/products/[title]`} as={`/products/${product.title.concat(" " + product._id).replace(/ /g, '-')}`}>
        <div className="product_container col-3 col-md-4 col-sm-6">
          <h2>{product.title}</h2>
          <div className="product_price">
              <div className="product_oldPrice">
                <span className="product_priceAmount">{product.oldPrice}</span>
                <span className="product_currency">A</span>
              </div>
              <div className="product_salePrice">
               <span className="product_priceAmount">{product.price}</span>
               <span className="product_currency">A</span>
              </div>
          </div>
          <img className="product_img" src={product.images[0]}></img>
          <button className="product_button">კალათაში დამატება</button>
          <i className="fas fa-heart favourite"></i>
        </div>
        </Link>
    )
}

export default Product;