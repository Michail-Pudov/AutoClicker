import React, { PureComponent } from "react";

class Dictionaries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="block__dictionaries">
          <h3>Tип занятости</h3>
          <select name="" className="select__employment">
            {this.props.state.dictionaries.employment.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
          <h3>Опыт работы</h3>
          <select name="" className="select__experience">
            {this.props.state.dictionaries.experience.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
          <h3>График работы</h3>
          <select name="" className="select__schedule">
            {this.props.state.dictionaries.schedule.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
          <h3>Tип вакансии</h3>
          <select name="" className="select__vacancy_type">
            {this.props.state.dictionaries.vacancy_type.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
          <h3>Метки вакансии</h3>
          <select name="" className="select__vacancy_label">
            {this.props.state.dictionaries.vacancy_label.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Dictionaries;
