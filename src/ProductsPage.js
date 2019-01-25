import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Link } from 'react-router-dom';
import './ProductsPage.css';
import ProductListItem from './ProductListItem';
import videoGamesProducts from './data/videoGames.json';
import { deepCloneArrOfObjs } from './App';

const dataClone = [...videoGamesProducts].map(ele => ({ ...ele }));
const test = deepCloneArrOfObjs(videoGamesProducts);
console.log(test);

class ProductsPage extends React.Component {
  state = {
    // query: "",
    products: dataClone,
  }

  render() {
    const { products } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { addToCart, cart, totalCost, numberOfProducts } = this.props;

    return (
      <div className="ProductsPage">
        <h4>Products</h4>
        {
          !Number(totalCost) <= 0 && (
            <div className="totalCost-wrapper">
              <h5>
                Total Cost: $<span className="totalCost">{totalCost}</span>
              </h5>
              <span className="number-of-items-in-cart">
                Number Of Items in Cart: <span>{cart.reduce((prevVal, currVal) => (prevVal += currVal.quantity), 0)}</span>
              </span>
            </div>
          )
        }
        {
          products.length > 0 && (
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
          )
        }
      </div>
    );
  }
}

export default ProductsPage;
