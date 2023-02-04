import { combineReducers } from "redux"
import viewReducer from './View'
import productListReducer from './ProductList'

const reducers = combineReducers({
    view: viewReducer,
    products: productListReducer
});

export default reducers;