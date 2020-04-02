import React, { PureComponent } from "react";

class SpecializationsAndProfissions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="block__specializations">
          <h3>Выбор специализации</h3>
          <select
            className="select__specializations"
            onChange={() => this.props.professions()}
          >
            {this.props.state.specializations.map((item, index) => {
              return (
                <option value={`${index} ${item.id}`} name={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        {this.props.state.blockProfessions ? (
          <div className="block__profissions">
            <h3>Выбор профессии</h3>
            <select className="select__professions">
              {this.props.state.professions.map((item, index) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SpecializationsAndProfissions;
