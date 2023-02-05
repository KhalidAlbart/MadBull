let defaultValue = JSON.parse(localStorage.getItem("Shopping cart")) || []

const updateDataById = (data) => {
    console.log(data)
    if (defaultValue.filter(item => item.id === data.id).length !== 0) {
        if (data.value === 0) {
            defaultValue = defaultValue.filter(item => item.id !== data.id)
        } else {
            defaultValue = defaultValue.map(item => {
                if (item.id === data.id) {
                    item.value = data.value
                }
                return item
            })
        }
    } else {
        if (data.value !== 0) {
            defaultValue.push(data)
        }
    }

    return defaultValue
}

const shoppingCartReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case "UPDATE_DATA_CART":
            state = updateDataById(action.payload)
            localStorage.setItem("Shopping cart", JSON.stringify(state))
            return state
        default:
            return state
    }
}

export default shoppingCartReducer