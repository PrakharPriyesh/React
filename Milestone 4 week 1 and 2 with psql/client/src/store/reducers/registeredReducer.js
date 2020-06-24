import { IS_USER_REGISTERED } from "../actions/types";

const initialState = {
    success: false,
    message: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case IS_USER_REGISTERED:
            return {
                ...state,
                success: action.payload.success,
                message: action.payload.message
            }
        default:
            return state;
    }
}