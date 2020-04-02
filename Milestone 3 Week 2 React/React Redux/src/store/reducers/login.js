import * as actionTypes from '../actions'

const initialState = {
    alertInfo : 0
}

const loginReducer = (state = initialState, action) => {
    if (action.type === actionTypes.LOGIN) {
        alert('Login alert' + action.value)
        return {
            ...state,
            alertInfo : action.value
        }
    }
    return state;
};

export default loginReducer;