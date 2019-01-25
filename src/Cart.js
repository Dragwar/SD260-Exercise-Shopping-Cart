import React from 'react';
import './Cart.css';
import CartItem from './CartItem';

class Cart extends React.Component {
  render() {
    const { cart, removeFromCart, totalCost } = this.props

    return (
      <div className="Cart">
        <h4>Cart</h4>
        {
          !totalCost <= 0 && (
            <h5 className="totalCost-wrapper">Total Cost: <span className="totalCost">{totalCost}</span></h5>
          )
        }
        <ul className="cart-list">
          {
            cart.map((product, index) => (
              <CartItem
                key={index}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Cart;
