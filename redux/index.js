import { createStore, applyMiddleware,compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk';
import reducer from './reducers';



let composeEnhancers = compose;


export const initStore = (initialState = {}) => {
    return createStore(reducer, initialState,  composeWithDevTools(applyMiddleware(thunk)));
};