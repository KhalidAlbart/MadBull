const defaultValue = true;

const viewReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case 'LIST':
            state = false;
            return state;
        default:
            state = defaultValue;
            return state;
    }
}

export default viewReducer;