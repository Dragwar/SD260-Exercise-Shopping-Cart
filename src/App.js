import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import WelcomePage from './WelcomePage';
import ProductsPage from './ProductsPage';
import Cart from './Cart';
import './App.css';

class App extends Component {
  state = {
    cart: []
  }

  addToCart = (productObject) => {
    let modifiedCloneObj = { ...productObject };

    /**@note just removed unused properties on the product when in cart */
    delete modifiedCloneObj.description;
    delete modifiedCloneObj.genre;

    this.setState((prevState) => ({
      cart: [modifiedCloneObj, ...prevState.cart]
    }));
  }

  removeFromCart = (productObject) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart].filter((product) => productObject !== product)
    }));
  }

  render() {

    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          component={() => <WelcomePage />}
        />

        <Route
          exact
          path="/products"
          component={() => (
            <ProductsPage
              cart={this.state.cart}
              addToCart={this.addToCart}
            />
          )}

        />

        <Route
          exact
          path="/cart"
          component={() => (
            <Cart
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
            />
          )}
        />

      </div>
    );
  }
}

export default App;
