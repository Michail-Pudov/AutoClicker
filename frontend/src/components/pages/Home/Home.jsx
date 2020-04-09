import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="row home white-text">
        <h1 className="col s8 offset-l1" style={{ marginTop: '80px' }}>Найти работу!</h1>
        <h2 className="col s8 offset-l2">Быстро!</h2>
        <div className="col s8 offset-s3">
          <Link to="/search" style={{ marginTop: '60px' }} className="pulse btn-floating btn-large">
            <i className="material-icons">search</i>
          </Link>
        </div>
      </div>
    );
  }
}


export default Home;
