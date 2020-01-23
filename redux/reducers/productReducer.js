import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from '../types';

const initialState = {
    products: null,
    error: null
};



export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            console.log(action.payload.data)
            return {
                ...state,
                products: action.payload.data
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};