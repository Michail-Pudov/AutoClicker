import React from 'react';

class SpecializationsAndProfissions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="block__specializations input-field col s8 offset-l2">
          <h4>Выбор профессиональной области</h4>
          <select
            className="select__specializations browser-default"
            onChange={() => this.props.professions()}
          >
            {this.props.state.specializations.map((item, index) => (
              <option
                key={item.id}
                value={`${index} ${item.id}`}
                name={item.id}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {this.props.state.blockProfessions ? (
          <div className="block__profissions input-field col s8 offset-l2">
            <h4>Выбор специализации</h4>
            <select className="select__professions browser-default">
              {this.props.state.professions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

        ) : null}
      </div>
    );
  }
}

export default SpecializationsAndProfissions;
