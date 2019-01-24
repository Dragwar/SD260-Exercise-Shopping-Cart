import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import WelcomePage from './WelcomePage';
import ProductPage from './ProductPage';
import Cart from './Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          component={WelcomePage}
        />

        <Route
          exact
          path="/products"
          component={ProductPage}
        />

        <Route
          exact
          path="/cart"
          component={Cart}
        />

      </div>
    );
  }
}

export default App;
