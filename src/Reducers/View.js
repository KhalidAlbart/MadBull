const defaultValue = sessionStorage.getItem("view") === "List" ? "List" : "Grid"

const viewReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case "LIST":
            state = "List";
            sessionStorage.setItem("view", "List");
            return state
        case "GRID":
            state = "Grid";
            sessionStorage.setItem("view", "Grid");
            return state
        default:
            return state
    }
}

export default viewReducer