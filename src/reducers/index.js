import {combineReducers} from 'redux';

import {generateProducts} from '../utils/data';
import {ACTION_TYPES} from '../actions';


// you'll notice I set my initial state below on line 13 to equal this object! This is a common pattern
const INITIAL_STATE = {
    productList: generateProducts(10),
    searchString: '', // hint for optional homework
    productName: '',
    productDepartment: ''
};

export const products = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.ADD_PRODUCT:
            // using object spread, I am saying - I want to return the old state, except change the productList property
            return {...state, productList: state.productList.concat(payload.product)};
        case ACTION_TYPES.REMOVE_PRODUCT:
            return {...state, productList: state.productList.slice(0, payload.product.id)};
        case ACTION_TYPES.SET_PRODUCT_NAME:
            return {...state, productName: payload.productName};
        case ACTION_TYPES.SET_PRODUCT_DEPARTMENT:
            return {...state, productDepartment: payload.productDepartment};
        case ACTION_TYPES.CLEAR_INPUT_FIELD:
            return {...state, productName: payload.param, productDepartment: payload.param};
    }
    return state;
};


// This is how you can combine many reducers into one large reducer:
// https://redux.js.org/api-reference/combinereducers
export default combineReducers({
    products,
});
