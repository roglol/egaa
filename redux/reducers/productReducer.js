import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from '../types';

const initialState = {
    products: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, { token: action.payload });
        case FETCH_PRODUCTS_FAILURE:
            return Object.assign({}, state, { user: action.payload });
        default:
            return state;
    }
};