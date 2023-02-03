import { PRODUCTS_ARRAY } from "../Components/constants"

const sortedArray = (array, key) => {
    const newArray = [...array].sort((a, b) => new Intl.Collator().compare(String(b[key]).toLowerCase(), String(a[key]).toLowerCase()))
    return newArray
}

const resultArray = (array, key, template) => {
    const newArray = [...array].filter(str => String(str[key]).includes(template) ? str : null)
    return newArray
}

const productListReducer = (state = PRODUCTS_ARRAY, action) => {
    switch(action.type) {
        case 'COST-UP':
            state = sortedArray(PRODUCTS_ARRAY, 4)
            return state
        case 'COST-DOWN':
            state = sortedArray(PRODUCTS_ARRAY, 4).reverse()
            return state
        case 'NAME-UP':
            state = sortedArray(PRODUCTS_ARRAY, 2)
            return state
        case 'NAME-DOWN':
            state = sortedArray(PRODUCTS_ARRAY, 2).reverse()
            return state
        case 'SEARCH':
            state = resultArray(PRODUCTS_ARRAY, "title", action.payload)
            return state
        default:
            return state
    }
}

export default productListReducer