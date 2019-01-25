import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Link } from 'react-router-dom';
import './CartItem.css';

class CartItem extends React.Component {
  render() {
    const { product, removeFromCart, handleQuantity, index } = this.props;

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
            draggable="false"
          />
        </div>

        <p className="cost">
          Price: {product.cost}
        </p>

        <div className="quantity">
          <button className="plus" onClick={() => handleQuantity(product, true, index)}>
            +
          </button>
          <span className="quantity-of-item">{product.quantity}</span>
          <button className="minus" onClick={() => handleQuantity(product, false, index)}>
            -
          </button>
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
