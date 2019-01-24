import React from 'react';
import './Cart.css';
import CartItem from './CartItem';

class Cart extends React.Component {
  render() {
    const { cart, removeFromCart } = this.props
    return (
      <div className="Cart">
        {
          cart.map((product, index) => (
            <CartItem
              key={index}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))
        }
      </div>
    );
  }
}

export default Cart;
