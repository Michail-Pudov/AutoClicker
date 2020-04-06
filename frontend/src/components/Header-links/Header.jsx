import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import classes from './Header.module.css';

// const { links, navStyle, logo } = classes;

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper grey lighten-4 ">
          <Link to="/" className="brand-logo grey-text text-darken-4">AutoClicker</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/" className="grey-text text-darken-4">Home</Link>
            </li>
            <li>
              <Link to="/registration" className="grey-text text-darken-4">Registration</Link>
            </li>
            <li>
              <Link to="/login" className="grey-text text-darken-4">Login</Link>
            </li>
            <li>
              <Link to="/account" className="grey-text text-darken-4">Account</Link>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}

export default Header;
