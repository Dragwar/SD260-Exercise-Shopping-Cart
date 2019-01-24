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
    const { addToCart, cart } = this.props;

    console.log(cart);
    return (
      <div className="ProductsPage">
        testing list
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
