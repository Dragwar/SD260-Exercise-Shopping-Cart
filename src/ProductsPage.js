import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Link } from 'react-router-dom';
import './ProductsPage.css';
import ProductListItem from './ProductListItem';
import videoGamesProducts from './data/videoGames.json';

const dataClone = [...videoGamesProducts].map(ele => ({ ...ele }));

class ProductsPage extends React.Component {
  state = {
    // query: "",
    products: dataClone,
  }
  render() {
    return (
      <div className="ProductsPage">
        testing list
        <ul className="product-list">
          {
            this.state.products.map((product, index) => (
              <ProductListItem
                key={index}
                index={index}
                product={product}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ProductsPage;
