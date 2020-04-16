import React from 'react';
import {
  withRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
// import bg from 'bg.jpg';
import Registration from './components/Auth/Registration/Registration';
import Login from './components/Auth/Login/Login';
import Header from './components/Header-links/Header';
import Account from './components/pages/Account/Account';
import Main from './components/pages/Main/Main';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';
import CRM from './components/pages/crmComponents/Crm';
import { getUserJobsSaga, getAllReviewInDatabaseSaga } from './redux/action';
import AllReviews from './components/pages/Reviews/AllReviews';
import NewReviews from './components/pages/Reviews/components/NewReviews';
import Bg from './bg2.jpeg';


const mainBackground = {
  marginTop: '-2%',
  background:
    // 'no-repeat url("https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80")'
    `url(${Bg})`,
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
    this.props.getAllReviewInDatabaseSaga();
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
  getAllReviewInDatabaseSaga,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
