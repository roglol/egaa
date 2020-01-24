import React from 'react';
import Header from '../components/Header';
import ProductContainer from '../components/ProductContainer';
import Categories from '../components/Categories';
import { withRouter } from 'next/router'
import { connect } from 'react-redux';

import { fetchProducts } from '../redux/actions';



const Products = (props) => {

    return (
        <>
            {/*<Header/>*/}
            {/*<Categories/>*/}
            {/*<ProductContainer/>*/}
            {console.log(props)}
            <div>vaime</div>
            <button onClick={fetchProducts}>fuckyou</button>
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




