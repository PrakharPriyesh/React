import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authActions";


import './App.css';

import store from './store/store';
import Login from './components/auth/login';
import Register from './components/auth/register';
import UpdateProduct from './components/product/updateProduct';
import PrivateRoute from './components/private-route/privateRoute';
import Dashboard from './components/dashboard/dashboard';

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Hello World</h1>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Switch>
            <PrivateRoute exact path="/updateProduct" component={UpdateProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
