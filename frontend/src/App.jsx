import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./App.module.css";
import Registration from "./components/Auth/Registration/Registration";
import Login from "./components/Auth/Login/Login";
import Header from "./components/Header-links/Header";
import Account from "./components/pages/Account/Account";
import Main from "./components/pages/Main/Main";
import Vacansies from "./components/pages/Vacansies/vacansies";

const { main } = classes;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const storage = localStorage.getItem("email");

    return (
      <>
        <div className={main}>
          <Header />
          <Switch>
            <Route
              exact
              path="/registration"
              render={props => <Registration {...props} />}
            />
            <Route path="/login" render={props => <Login {...props} />} />
            {storage ? (
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
      </>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email
});

export default withRouter(connect(mapStateToProps)(App));
