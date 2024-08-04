const initialState = {
    single: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SINGLE":
            return {
                ...state,
                single: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
