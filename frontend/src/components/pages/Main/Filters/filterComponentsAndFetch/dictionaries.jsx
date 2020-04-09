import React from 'react';

class Dictionaries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="block__dictionaries input-field col s8 offset-l2">
          <h4>Tип занятости</h4>
          <select name="" className="select__employment browser-default">
            {this.props.state.dictionaries.employment
              .map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
          <h4>Опыт работы</h4>
          <select name="" className="select__experience browser-default">
            {this.props.state.dictionaries.experience
              .map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
          <h4>График работы</h4>
          <select name="" className="select__schedule browser-default">
            {this.props.state.dictionaries.schedule
              .map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
          <h4>Tип вакансии</h4>
          <select name="" className="select__vacancy_type browser-default">
            {this.props.state.dictionaries.vacancy_type
              .map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
          <h4>Метки вакансии</h4>
          <select name="" className="select__vacancy_label browser-default">
            {this.props.state.dictionaries.vacancy_label
              .map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default Dictionaries;
