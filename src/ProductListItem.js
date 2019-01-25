import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Link } from 'react-router-dom';
import './ProductListItem.css';

class ProductListItem extends React.Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <li
        id={`gameID-${product.id}`}
        className="ProductListItem"
      >

        <h2 className="title">
          {product.title}
        </h2>

        <div className="image-container">
          <img
            className="image"
            src={product.imageURL}
            alt="video-game-box-art"
            width="250"
            height="300"
            draggable="false"
          />
        </div>

        <h5 className="genre-header">
          Genre(s):
        </h5>
        <p className="genre">
          {product.genre.join(', ')}
        </p>

        <h5 className="description-header">
          Description:
        </h5>
        <p className="description">
          {product.description}
        </p>

        <p className="cost">
          ${product.cost}
        </p>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

      </li>
    );
  }
}

export default ProductListItem;
