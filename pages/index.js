import React from 'react';
import Header from '../components/Header';
import ProductContainer from '../components/ProductContainer';
import Categories from '../components/Categories';
import { withRouter } from 'next/router'



const Products = () => {
    return (
        <>
            <Header/>
            <Categories/>
            <ProductContainer/>
        </>
    )
  }



export default withRouter(Products);




