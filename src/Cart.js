import React from 'react';
import './Cart.css';
import CartItem from './CartItem';

class Cart extends React.Component {
  render() {
    const { cart, removeFromCart, totalCost, handleQuantity } = this.props;

    return (
      <div className="Cart">
        <h4>Cart</h4>
        {
          !Number(totalCost) <= 0 && (
            <div className="totalCost-wrapper">
              <h5>
                Total Cost: $<span className="totalCost">{totalCost}</span>
              </h5>
              <span className="number-of-items-in-cart">
                Number Of Items in Cart: <span>{cart.reduce((prevVal, currVal) => (prevVal += currVal.quantity), 0)}</span>
              </span>
            </div>
          )
        }
        {
          cart.length <= 0 && (
            <p>
              To add a product to your cart, go to our products page via the link in the nav bar
            </p>
          )
        }
        <ul className="cart-list">
          {
            cart.map((product, index) => (
              <CartItem
                key={index}
                index={index}
                product={product}
                removeFromCart={removeFromCart}
                handleQuantity={handleQuantity}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Cart;
