export const updateCartAction = (count, itemId) => {
    return {
        type: "UPDATE_DATA_CART",
        payload: {
            value: count,
            id: itemId
        }
    }
}