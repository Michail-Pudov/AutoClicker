import React from "react";
import Registration from "./components/registration";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import Header from "./components/Header";
import Account from "./components/Account";
import { connect } from "react-redux";
import Showvacancy from './components/crmComponents/Showvacancy'
import Addvacancy from './components/crmComponents/Addvacancy'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Registration {...props}></Registration>}
            ></Route>
            <Route
              path="/login"
              render={props => <Login {...props}></Login>}
            ></Route>

            {this.props.email ? (
              <>
              <Route path="/account">
                <Account />
              </Route>
            
          <Route exact path='/crm/show-vacancy' component={Showvacancy} />
          <Route exact path='/crm/add' component={Addvacancy} />
          </>
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
        </div>
        
        <div>

        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.email
  };
};

export default withRouter(connect(mapStateToProps)(App));
