import * as actionTypes from '../actions'

const initialState = {
    products: {}
}

const productReducer = (state = initialState, action) => {
    if (action.type === actionTypes.PRODUCT_ADDED) {
        alert('item added' + action.value)
        return {
            ...state,
            products: action.value
        }
    }
    return state;
};

export default productReducer;