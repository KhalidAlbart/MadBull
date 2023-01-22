const defaultValue = Number(sessionStorage.getItem('page') ? sessionStorage.getItem('page') : 1);

const paginationReducer = (state = defaultValue, action) => {
    switch(action.type) {
        case 'UPDATE':
            return action.payload;
        case 'NEXT':
            return state + 1;
        case 'PREV':
            return state - 1;
        default:
            return state;
    }
}

export default paginationReducer;