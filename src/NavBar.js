import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="NavBar">
        <ul className="links-container">
          <li className="link-wrapper">
            <Link className="page-link" to="/">Home</Link>
          </li>
          <li className="link-wrapper">
            <Link className="page-link" to="/cart">Cart</Link>
          </li>
          <li className="link-wrapper">
            <Link to="/products">Product Page</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
