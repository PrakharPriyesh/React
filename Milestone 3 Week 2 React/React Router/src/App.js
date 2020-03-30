import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from './component/about';
import SellerContainer from './component/seller-view/'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/sellers/:id">
            <SellerContainer />
          </Route>
          <Route path="/sellers">
            <SellerContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
