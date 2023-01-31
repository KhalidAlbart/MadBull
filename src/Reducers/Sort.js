const defaultValue = 'COST-UP'

const sortReducer = (state = defaultValue, action) => {
    switch(action.type) {
        case 'COST-UP':
            return 'COST-UP'
        default:
            return state
    }
}