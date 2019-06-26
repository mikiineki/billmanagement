import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Bill<span>Managment</span></li>
          </ul>
          <ul>
              <li>
              <Link to="/signup" activeClassName={"active"}>Sign Up</Link>
                </li>
              <li>
                <Link to="/signin" activeClassName={"active"}>Login</Link>
              </li>
              <li>
                <Link to="/pay" activeClassName={"active"}>Pay</Link>
              </li>
          </ul>
      </nav>
    );
  }
}

export default Nav;