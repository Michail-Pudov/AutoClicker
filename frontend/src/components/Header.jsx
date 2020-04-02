import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Link to="/login">Login</Link>
        <Link to="/">Registration</Link>
      </>
    );
  }
}

export default Header;
