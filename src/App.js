import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import WelcomePage from './WelcomePage';
import ProductsPage from './ProductsPage';
import Cart from './Cart';
import './App.css';

export function deepCloneArrOfObjs(arrayOfObjects) { return [...arrayOfObjects].map(ele => ({ ...ele })) };

class App extends Component {
  state = {
    cart: [],
    totalCost: 0,
  }

  // --------------------------------------------------------------------------------------------------------------- //
    /** @Name                                      handleQuantity                                                  */
  // --------------------------------------------------------------------------------------------------------------- //
  handleQuantity = (productObject, isPositive, index) => {
    let modifiedCloneObj = { ...productObject };

    if (productObject.quantity === 1 && !isPositive) {
      alert(`
        If you want to remove "${productObject.title}"
        from your cart please click remove from cart button.
      `);
      return;
    }

    this.setState((prevState) => {
      let cloneCartWithoutOldObj = deepCloneArrOfObjs(prevState.cart);
      cloneCartWithoutOldObj[index] = undefined;
      cloneCartWithoutOldObj[index] = modifiedCloneObj;

      isPositive ? ++modifiedCloneObj.quantity : --modifiedCloneObj.quantity;

      return { cart: [...cloneCartWithoutOldObj] };
    });

    this.setState((prevState) => {
      let cost = modifiedCloneObj.cost;
      let total = Number(prevState.totalCost);

      modifiedCloneObj.totalCostOfTheQuantityOfItems = (modifiedCloneObj.cost * modifiedCloneObj.quantity);

      if (modifiedCloneObj.quantity > productObject.quantity) {
        return { totalCost: (total += cost).toFixed(2) };

      } else if (modifiedCloneObj.quantity < productObject.quantity) {
        return { totalCost: (total -= cost).toFixed(2) };
      }
    });
  }

  // --------------------------------------------------------------------------------------------------------------- //
    /** @Name                                   calcTotalCartCost                                                  */

    /** @NOTE if the item exists in the cart with a quantity above 1, then it will reset the quantity back to zero */
  // --------------------------------------------------------------------------------------------------------------- //
  addToCart = (productObject) => {
    let modifiedCloneObj = { ...productObject, quantity: 1 };
    modifiedCloneObj.totalCostOfTheQuantityOfItems = (modifiedCloneObj.cost * modifiedCloneObj.quantity);
    /**@note just removed unused properties on the product when in cart */
    delete modifiedCloneObj.description;
    delete modifiedCloneObj.genre;

    this.setState((prevState) => ({
      cart: [modifiedCloneObj, ...prevState.cart],
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

  // --------------------------------------------------------------------------------------------------------------- //
    /** @Name                                      removeFromCart                                                  */
  // --------------------------------------------------------------------------------------------------------------- //
  removeFromCart = (productObject) => {
    /**@description filters out removed product */
    this.setState((prevState) => ({
      cart: [...prevState.cart].filter((product) => productObject !== product),
    }));

    /**@description subtracts the cost of the removed product */
    this.setState((prevState) => {
      return { totalCost: (prevState.totalCost -= productObject.totalCostOfTheQuantityOfItems).toFixed(2) }
    });
  }

  // --------------------------------------------------------------------------------------------------------------- //
    /** @Name                                   calcTotalCartCost                                                  */
  // --------------------------------------------------------------------------------------------------------------- //
  calcTotalCartCost = () => {
    this.setState((prevState) => {
      let total = prevState.cart
        .map(product => product.totalCostOfTheQuantityOfItems)
        .reduce((number, sum) => (sum += number), 0)
        .toFixed(2);
      return { totalCost: total };
    });
  }

  render() {
    const { cart, totalCost } = this.state;
    console.log('CART:', cart);
    console.log('TOTAL COST:', Number(totalCost));

    return (
      <div className="App">
        <NavBar
          cart={cart}
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
              handleQuantity={this.handleQuantity}
            />
          )}
        />

      </div>
    );
  }
}

export default App;
