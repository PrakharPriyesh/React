import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from './component/about/About';
import SellerView from './component/seller-view/sellerView'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/sellers/:id">
            <SellerView />
          </Route>
          <Route path="/sellers">
            <SellerView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
