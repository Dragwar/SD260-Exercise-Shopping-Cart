import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Link } from 'react-router-dom';
import './ProductListItem.css';

class ProductListItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <li
        id={`gameID-${product.id}`}
        className="ProductListItem"
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

        <span className="genre-header">Genre(s):</span>
        <p className="genre">
          {product.genre.join(', ')}
        </p>

        <span className="description-header">Description:</span>
        <p className="description">
          {product.description}
        </p>

        <button
          className="add-to-cart-btn"
        >
          Add To Cart
        </button>

      </li>
    );
  }
}

export default ProductListItem;
