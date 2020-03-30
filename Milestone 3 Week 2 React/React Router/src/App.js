import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from './component/about';
import SellerPresenter from './component/sellers/'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/sellers/:id">
            <SellerPresenter />
          </Route>
          <Route path="/sellers">
            <SellerPresenter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
