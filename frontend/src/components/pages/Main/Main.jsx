import React, { Component } from 'react';
import './Main.module.css';
import Filters from './Filters/Filters';
import ScrollTo from '../../ScrollTo/ScrollTo';

class Main extends Component {
  render() {
    return (
      <div className="search row">
        <h1 className="col m12 s12 l12 offset-l1">Поиск вакансий</h1>
        <ScrollTo />
        <Filters />
      </div>
    );
  }
}

export default Main;
