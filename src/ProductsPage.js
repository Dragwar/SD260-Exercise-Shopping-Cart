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
    const { products } = this.state;
    const { addToCart, cart, totalCost } = this.props;

    console.log('CART',cart);

    return (
      <div className="ProductsPage">
        <h4>Products</h4>
        {
          !totalCost <= 0 && (
            <h5 className="totalCost-wrapper">Total Cost: <span className="totalCost">{totalCost}</span></h5>
          )
        }
        <ul className="product-list">
          {
            products.map((product, index) => (
              <ProductListItem
                key={index}
                index={index}
                product={product}
                addToCart={addToCart}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ProductsPage;
