import axios from "axios";
import setAuthToken from './../../utils/setAuthToken';
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  IS_USER_REGISTERED
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/registerUser", userData)
    .then(res => {
      switch (res.data) {
        case "Registered":
          dispatch(setUserRegistered({ success: true, message: res.data }));
          break;
        case "Already":
          dispatch(setUserRegistered({ success: false, message: res.data }));
          break;
        default:
          dispatch(setUserRegistered({ success: false, message: res.data }));
      }

    }) // re-direct to login on successful register
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/loginUser", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const setUserRegistered = (data) => {
  return {
    type: IS_USER_REGISTERED,
    payload: data
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};