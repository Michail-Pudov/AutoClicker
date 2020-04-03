import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Registration from "./components/Auth/Registration/Registration";
import Login from "./components/Auth/Login/Login";
import Header from "./components/Header-links/Header";
import Account from "./components/pages/Account/Account";
import Main from "./components/pages/Main/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const storage = localStorage.getItem("email");

    return (
      <>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/registration"
                render={props => <Registration {...props} />}
              />
              <Route path="/login" render={props => <Login {...props} />} />
              {storage && this.props.email ? (
                <>
                  <Route exact path="/">
                    <Main />
                  </Route>
                  <Route path="/account">
                    <Account />
                  </Route>
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email
});

export default withRouter(connect(mapStateToProps)(App));
