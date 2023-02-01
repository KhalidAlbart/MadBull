import { combineReducers } from "redux"
import viewReducer from './View'
import productListReducer from './ProductList'
import paginationReducer from './Pagination'

const reducers = combineReducers({
    view: viewReducer,
    products: productListReducer,
    pageNumber: paginationReducer
});

export default reducers;