import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import WelcomePage from './WelcomePage';
import ProductsPage from './ProductsPage';
import Cart from './Cart';
import './App.css';

class App extends Component {
  state = {
    cart: [],
    totalCost: 0,
  }

  addToCart = (productObject) => {
    let modifiedCloneObj = { ...productObject };

    /**@note just removed unused properties on the product when in cart */
    delete modifiedCloneObj.description;
    delete modifiedCloneObj.genre;

    this.setState((prevState) => ({
      cart: [modifiedCloneObj, ...prevState.cart]
    }));

    /**@description removes dup products from cart */
    this.setState((prevState) => {
      const result = [];
      const map = new Map();
      for (const product of prevState.cart) {
        if (!map.has(product.id)) {
          map.set(product.id, 'present');// Sets a val along side the product.id key
          result.push({ ...product });
        }
      }
      return { cart: [...result] };
    });
    this.calcTotalCartCost();
  }

  removeFromCart = (productObject) => {
    /**@description filters out removed product */
    this.setState((prevState) => ({
      cart: [...prevState.cart].filter((product) => productObject !== product)
    }));

    /**@description subtracts the cost of the removed product */
    this.setState((prevState) => ({
      totalCost: (prevState.totalCost -= productObject.cost)
    }));
    this.calcTotalCartCost();
  }

  calcTotalCartCost = () => {
    this.setState((prevState) => {
      let total = prevState.cart
        .map(product => product.cost)
        .reduce((number, sum) => (sum += number), 0)
        .toFixed(2);
      return { totalCost: total };
    });
  }

  render() {
    const { cart, totalCost } = this.state;

    return (
      <div className="App">
        <NavBar
          calcTotalCartCost={this.calcTotalCartCost}
        />
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
              cart={cart}
              addToCart={this.addToCart}
              totalCost={totalCost}
            />
          )}

        />

        <Route
          exact
          path="/cart"
          component={() => (
            <Cart
              cart={cart}
              removeFromCart={this.removeFromCart}
              totalCost={totalCost}
            />
          )}
        />

      </div>
    );
  }
}

export default App;
