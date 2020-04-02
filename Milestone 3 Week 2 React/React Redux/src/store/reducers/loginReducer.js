const initialState = {
    alertInfo : 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'LOGIN') {
        alert('Login alert' + action.value)
        return {
            ...state,
            alertInfo : action.value
        }
    }
    return state;
};

export default reducer;