import React, { PureComponent } from "react";

class WageLevel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Уровень заработной платы</h3>
        <input type="text" placeholder="RUB" className="WageLevel" />
      </div>
    );
  }
}

export default WageLevel;
