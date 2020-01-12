import React, { useState } from 'react';

const Product = () =>{
    return (
        <div className="product_container col-3 col-md-4 col-sm-6">
          <h2>5 სახეობის კაფსულა ერთად</h2>
          <div className="product_price">
              <div className="product_oldPrice">
                <span className="product_priceAmount">85</span>
                <span className="product_currency">A</span>
              </div>
              <div className="product_salePrice">
               <span className="product_priceAmount">75</span>
               <span className="product_currency">A</span>
              </div>
          </div>
          <img className="product_img" src="https://premiumcoffee.ge/upload/products/295761573727732.png"></img>
          <button className="product_button">კალათაში დამატება</button>
          <i className="fas fa-heart favourite"></i>
        </div>
    )
}

export default Product;