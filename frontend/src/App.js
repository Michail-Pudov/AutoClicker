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
import Showvacancy from './components/pages/crmComponents/Showvacancy';
import Addvacancy from './components/pages/crmComponents/Addvacancy';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';


const mainBackground = {
  background: 'no-repeat 100% 50%  url("https://www.publicdomainpictures.net/pictures/250000/velka/clouds-background-005.jpg")',
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
    if (this.props.location.pathname === '/' || this.props.location.pathname === '/login' || this.props.location.pathname === '/registration') {
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
      if (this.props.location.pathname === '/' || this.props.location.pathname === '/login' || this.props.location.pathname === '/registration') {
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
                    <Route
                      exact
                      path="/crm/show-vacancy"
                      component={Showvacancy}
                    />
                    <Route exact path="/crm/add" component={Addvacancy} />

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

export default withRouter(connect(mapStateToProps)(App));
