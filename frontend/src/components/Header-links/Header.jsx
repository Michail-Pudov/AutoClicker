import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import { addUser } from "../../redux/action";
import { connect } from "react-redux";
import M from "materialize-css";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      status: false
    };
  }

  componentDidMount() {
    const options = {
      edge: "left",
      draggable: true,
      inDuration: 250,
      outDuration: 200
    };
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".sidenav");
      const instance = M.Sidenav.init(elems, options);
    });

    // M.Sidenav.init(this.Sidenav, options)
  }

  userLogout = () => {
    localStorage.removeItem("email");
    this.setState({
      status: false
    });
  };

  render() {
    const storage = localStorage.getItem("email");

    return (
      <nav>
        <div className="nav-wrapper grey lighten-4 ">
          <Link to="/" className="brand-logo grey-text text-darken-4">
            AutoClicker
          </Link>
          <Link
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger grey-text text-darken-4"
          >
            <i className="material-icons">menu</i>
          </Link>
          {storage ? (
            <div>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/" className="grey-text text-darken-4">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/search" className="grey-text text-darken-4">
                    Search
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="grey-text text-darken-4">
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="grey-text text-darken-4">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="grey-text text-darken-4"
                    onClick={() => {
                      this.userLogout();
                      this.props.addUser(this.state.email);
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
              <ul className="sidenav" id="mobile-demo">
                <li>
                  <Link to="/" className="grey-text text-darken-4">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/search" className="grey-text text-darken-4">
                    Search
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="grey-text text-darken-4">
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="grey-text text-darken-4">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="grey-text text-darken-4"
                    onClick={() => {
                      this.userLogout();
                      this.props.addUser(this.state.email);
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/registration" className="grey-text text-darken-4">
                    Registration
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="grey-text text-darken-4">
                    Login
                  </Link>
                </li>
              </ul>
              <ul className="sidenav" id="mobile-demo">
                <li>
                  <Link to="/registration" className="grey-text text-darken-4">
                    Registration
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="grey-text text-darken-4">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: email => dispatch(addUser(email))
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
