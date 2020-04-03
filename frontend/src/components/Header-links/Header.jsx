import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const { links, navStyle, logo } = classes;

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={logo}>
          <b>AutoClicker</b>
        </div>
        <nav className={navStyle}>
          <Link className={links} to="/">Home</Link>
          <Link className={links} to="/registration">Registration</Link>
          <Link className={links} to="/login">Login</Link>
          <Link className={links} to="/account">Account</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
