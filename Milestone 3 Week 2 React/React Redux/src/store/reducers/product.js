import * as actionTypes from '../actions'

const initialState = {
    alertInfo: 0
}

const productReducer = (state = initialState, action) => {
    if (action.type === actionTypes.PRODUCT_ADDED) {
        alert('item added' + action.value)
        return {
            ...state,
            alertInfo: action.value
        }
    }
    return state;
};

export default productReducer;