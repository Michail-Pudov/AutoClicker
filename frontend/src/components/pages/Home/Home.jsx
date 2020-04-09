import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="home white-text">
        <h1>Найти работу!</h1>
        <h2>Быстро!</h2>
        <Link to="/search" className="grey-text text-darken-4">
          <button style={{ marginTop: '80px' }} type="button" className="btn-large grey lighten-3 grey-text text-darken-4">
            <i className="material-icons right">search</i>
            Сейчас!
          </button>
        </Link>
      </div>
    );
  }
}


export default Home;
