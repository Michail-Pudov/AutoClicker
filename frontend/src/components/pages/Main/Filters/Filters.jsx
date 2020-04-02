import React, { Component } from 'react';
import classes from './Filters.module.css';

const { selector, buttonSearch } = classes;


class Filters extends Component {
  render() {
    return (
      <div>
        <span className="select">
          <select className={selector}>
            <option value="1" defaultChecked>Выберете сферу</option>
            <option value="2">IT</option>
            <option value="3">KFC</option>
          </select>
          <select className={selector}>
            <option value="4" defaultChecked>Выберете специальность</option>
            <option value="5">1</option>
            <option value="6">2</option>
          </select>
        </span>
        <button type="button" className={buttonSearch}>Search</button>
      </div>
    );
  }
}

export default Filters;
