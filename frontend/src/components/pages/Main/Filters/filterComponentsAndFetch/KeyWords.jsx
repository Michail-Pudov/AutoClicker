import React, { PureComponent } from "react";

class KeyWords extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Ключевые слова</h3>
        <input type="text" name="keyWords" className="keyWords" />
        <select name="" className="select__vacancy_search_fields">
          {this.props.dictionaries.vacancy_search_fields.map(item => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default KeyWords;
