import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="borderTextH1">Найти работу!</div>
        <div className="borderTextH2">Быстро!</div>
        <div className="buttonSearchOfHome">
          <Link to="/search" className="pulse btn-floating btn-large">
            <div className="buttonIcon">
            <i className="material-icons">search</i>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
