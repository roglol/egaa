import Router from 'next/router';
import axios from 'axios';
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from '../types';
import { API } from '../../config';



export const fetchProducts = () => async dispatch =>{
        await axios.get(API + '/products')
            .then(products => {
                    dispatch({
                        type: FETCH_PRODUCTS_SUCCESS,
                        payload: products.data
                    })
            }
            )
}