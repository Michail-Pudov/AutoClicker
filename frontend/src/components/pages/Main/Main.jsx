import React, { Component } from 'react';
import Filters from './Filters/Filters';
import ScrollTo from '../../ScrollTo/ScrollTo';


class Main extends Component {
  render() {
    return (
      <div className="search">
        <h1>Поиск вакансий</h1>
        <ScrollTo />
        <Filters />
      </div>
    );
  }
}

export default Main;
