import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from './component/login/login';
import Dashboard from './component/dashboard/dashboard';
import Catalog from './component/catalog/catalog'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
