import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { addUser } from "../../redux/action";
import { connect } from "react-redux";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      status: false,
    };
  }


  userLogout = () => {
    localStorage.removeItem('email')
    this.setState({
      status: false,
    });
  };


  render() {
    const storage = localStorage.getItem('email');
    return (
      <nav>
        <div className="nav-wrapper grey lighten-4 ">
          <Link to="/" className="brand-logo grey-text text-darken-4">AutoClicker</Link>
          {storage ? (
            <ul id="nav-mobile" className="right hide-on-med-and-down">

              <li>
                <Link to="/" className="grey-text text-darken-4">Home</Link>
              </li>
              <li>
                <Link to="/search" className="grey-text text-darken-4">Search</Link>
              </li>
              <li>
                <Link to="/account" className="grey-text text-darken-4">Account</Link>
              </li>
              <li>
                <Link to="/" className="grey-text text-darken-4" onClick={
                  () =>  {
                    this.userLogout()
                    this.props.addUser(this.state.email);
                  }}>Logout</Link>
              </li>
            </ul>

          ) : (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/registration" className="grey-text text-darken-4">Registration</Link>
              </li>
              <li>
                <Link to="/login" className="grey-text text-darken-4">Login</Link>
              </li>
            </ul>
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
