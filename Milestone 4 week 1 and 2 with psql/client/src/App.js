import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";


import './App.css';

import store from './store/store';
import Login from './components/auth/login';
import Register from './components/auth/register';
import UpdateProduct from './components/product/updateProduct';
import PrivateRoute from './components/private-route/privateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Hello World</h1>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Switch>
            <PrivateRoute exact path="/updateProduct" component={UpdateProduct} />
          </Switch>
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
