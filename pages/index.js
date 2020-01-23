import React from 'react';
import Header from '../components/Header';
import ProductContainer from '../components/ProductContainer';
import Categories from '../components/Categories';
import { withRouter } from 'next/router'
import withRedux from 'next-redux-wrapper';
import { connect } from 'react-redux';

import { fetchProducts } from '../redux/actions';

console.log(fetchProducts)

const Products = (props) => {

    return (
        <>
            {/*<Header/>*/}
            {/*<Categories/>*/}
            {/*<ProductContainer/>*/}
            <div>vaime</div>
            <button onClick={fetchProducts}>fuckyou</button>
        </>
    )
  }


  // Products.getInitialProps = async ({store}) =>{
  // await store.dispatch(fetchProducts())
  //     const products = store.getState()
  //     return {products}
  // }


export default withRouter(Products);




