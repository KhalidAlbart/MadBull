let defaultValue = JSON.parse(localStorage.getItem("Shopping cart")) || []

const updateDataById = (id, value) => {
    if (defaultValue.filter(item => item.id === id).length !== 0) {
        if (value === 0) {
            defaultValue = defaultValue.filter(item => item.id !== id)
        } else {
            defaultValue = defaultValue.map(item => {
                if (item.id === id) {
                    item.value = value
                }
                return item
            })
        }
    } else {
        if (value !== 0) {
            defaultValue.push({ id: id, value: value })
        }
    }

    return defaultValue
}

const shoppingCartReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case "UPDATE_DATA_CART":
            state = updateDataById(action.payload.id, action.payload.value)
            localStorage.setItem("Shopping cart", JSON.stringify(state))
            return state
        default:
            return state
    }
}

export default shoppingCartReducer