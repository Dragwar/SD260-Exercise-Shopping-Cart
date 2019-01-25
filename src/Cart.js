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
          !totalCost <= 0 && (
            <h5 className="totalCost-wrapper">Total Cost: <span className="totalCost">{totalCost}</span></h5>
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
