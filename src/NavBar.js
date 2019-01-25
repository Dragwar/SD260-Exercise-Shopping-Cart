import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { calcTotalCartCost, cart } = this.props;
    return (
      <nav className="NavBar">
        <ul className="links-container">
          <li className="link-wrapper">
            <Link
              className="page-link"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="link-wrapper">
            <Link
              className="page-link"
              to="/products"
            >
              Products
            </Link>
          </li>
          <li className="link-wrapper">
            <Link
              className="page-link"
              to="/cart"
            // onClick={calcTotalCartCost} //already invoking when adding a product
            >
              Cart
            </Link>
            {
              cart.length !== 0 && (
                <p className="number-of-items-in-cart">
                  {cart.reduce((prevVal, currVal) => (prevVal += currVal.quantity), 0)}
                </p>
              )
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
