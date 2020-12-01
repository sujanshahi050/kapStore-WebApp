// Redux Store
import {applyMiddleware, createStore,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { 
    productDetailsReducer, 
    productListReducer,
}   from './reducers/productReducers';

const initialState = {};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store that returns a list of product element received from data.js to frontend
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);


export default store;