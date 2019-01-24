import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Link } from 'react-router-dom';
import './CartItem.css';

class CartItem extends React.Component {
  render() {
    const { product, removeFromCart } = this.props;

    return (
      <li
        id={`gameID-${product.id}`}
        className="CartItem"
      >

        <h3 className="title">
          {product.title}
        </h3>

        <div className="image-container">
          <img
            className="image"
            src={product.imageURL}
            alt="video-game-box-art"
            width="200"
            height="250"
          />
        </div>

        <button
          className="Remove-from-cart-btn"
          onClick={() => removeFromCart(product)}
        >
          Remove From Cart
        </button>

      </li>
    );
  }
}

export default CartItem;
