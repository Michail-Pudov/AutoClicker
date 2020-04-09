import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="home white-text">
        <div className="borderTextH1">
          Найти работу!
        </div>
        <div className="borderTextH2">
          Быстро!
        </div>
        <div className="buttonSearchOfHome">
          <Link to="/search" className="pulse btn-floating btn-large">
            <i className="material-icons">search</i>
          </Link>
        </div>
      </div>
    );
  }
}


export default Home;
