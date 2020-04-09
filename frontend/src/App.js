import React from 'react';
import {
  withRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Registration from './components/Auth/Registration/Registration';
import Login from './components/Auth/Login/Login';
import Header from './components/Header-links/Header';
import Account from './components/pages/Account/Account';
import Main from './components/pages/Main/Main';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';
import CRM from './components/pages/crmComponents/Crm';
import { getUserJobsSaga } from './redux/action';
import AllReviews from './components/pages/Reviews/AllReviews';
import NewReviews from './components/pages/Reviews/components/NewReviews';

const mainBackground = {
  background:
    'no-repeat url("https://sciencemagic.ru/wp-content/uploads/2016/01/unemployed.jpg")',
  backgroundSize: 'cover',
};
const mainBackgroundWhite = {
  background: 'white',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundStyle: {
        background: mainBackground,
      },
    };
  }

  componentDidMount() {
    this.props.getUserJobsSaga(localStorage.email);
    if (
      this.props.location.pathname === '/'
      || this.props.location.pathname === '/login'
      || this.props.location.pathname === '/registration'
    ) {
      this.setState({
        backgroundStyle: mainBackground,
      });
    } else {
      this.setState({
        backgroundStyle: mainBackgroundWhite,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      if (
        this.props.location.pathname === '/'
        || this.props.location.pathname === '/login'
        || this.props.location.pathname === '/registration'
      ) {
        this.setState({
          backgroundStyle: mainBackground,
        });
      } else {
        this.setState({
          backgroundStyle: mainBackgroundWhite,
        });
      }
    }
  }

  render() {
    const storage = localStorage.getItem('email');

    return (
      <>
        <div className="body">
          <Header />
          <div className="main" style={this.state.backgroundStyle}>
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/registration"
                  render={(props) => <Registration {...props} />}
                />
                <Route path="/login" render={(props) => <Login {...props} />} />
                {storage ? (
                  <>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/search">
                      <Main />
                    </Route>
                    <Route exact path="/account">
                      <Account />
                    </Route>
                    <Route exact path="/reviews">
                      <AllReviews />
                    </Route>
                    <Route exact path="/newReviews">
                      <NewReviews />
                    </Route>
                    <Route exact path="/crm" component={CRM} />
                  </>
                ) : (
                  <Redirect to="/login" />
                )}
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
});
const mapDispatchToProps = {
  getUserJobsSaga,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
