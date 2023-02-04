import { combineReducers } from "redux"
import viewReducer from './View'
import productListReducer from './ProductList'
import shoppingCartReducer from './ShoppingCart'

const reducers = combineReducers({
    view: viewReducer,
    products: productListReducer,
    shoppingCart: shoppingCartReducer
});

export default reducers;