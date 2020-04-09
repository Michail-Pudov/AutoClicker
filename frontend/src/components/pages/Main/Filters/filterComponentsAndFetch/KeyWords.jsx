import React from 'react';


class KeyWords extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <h4 className="col s8 offset-l2">Ключевые слова</h4>
        <div className="input-field col s4 offset-l2">
          <input type="text" className="keyWords" name="keyWords" placeholder="Введите теги" />
        </div>
        <div className="input-field col s4">
          <select name="" className="select__vacancy_search_fields browser-default">
            {this.props.dictionaries.vacancy_search_fields
              .map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default KeyWords;


// <div>
//   <h3>Ключевые слова</h3>
//   <input type="text" name="keyWords" className="keyWords" />
//   <select name="" className="select__vacancy_search_fields">
//     {this.props.dictionaries.vacancy_search_fields
//     .map((item) => <option value={item.id}>{item.name}</option>)}
//   </select>
// </div>
