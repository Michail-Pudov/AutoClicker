import React from 'react';

class WageLevel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s8 offset-l2">
          <h4>Уровень заработной платы</h4>
          <input type="text" placeholder="RUB" className="WageLevel" />
        </div>
      </div>
    );
  }
}

export default WageLevel;
