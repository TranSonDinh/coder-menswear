import { combineReducers } from 'redux';
import products from './product.js';
import cart from './cart.js';

export default combineReducers({
    products,
    cart
})