const defaultValue = sessionStorage.getItem('view') ? JSON.parse(sessionStorage.getItem('view')) : true

const viewReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case 'LIST':
            state = false
            return state
        case 'GRID':
            state = true
            return state
        default:
            state = defaultValue
            return state
    }
}

export default viewReducer