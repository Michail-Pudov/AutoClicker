import React from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class Crm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <h3>Общая база моих откликов</h3>
        <div className="crmNav">
          <Link to="/crm/bd">Зайти в текущую базу</Link>
        </div>
      </>
    );
  }
}

export default Crm;
