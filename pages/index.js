import React from 'react';
import Header from '../components/Header';
import ProductContainer from '../components/ProductContainer';
import Categories from '../components/Categories';
import { withRouter } from 'next/router'
import { connect } from 'react-redux';

import { fetchProducts } from '../redux/actions';

// https://www.fumoney.com/the-one-skill?cf_uvid=64617b1619b8b8ed16a7d0d1915cffb4

const Products = (props) => {

    return (
        <>
            <Header/>
            <Categories/>
            <ProductContainer data = {props.products}/>
        </>
    )
  }


const mapStateToProps = state => ({ products: state.productReducer.products })

  Products.getInitialProps = async ({store}) =>{
  await store.dispatch(fetchProducts())
      const products = store.getState().productReducer.products
      return {products}
  }


export default connect(mapStateToProps,null)(withRouter(Products));




