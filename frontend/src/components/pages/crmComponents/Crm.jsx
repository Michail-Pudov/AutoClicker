import React from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import WeResponded from "./Components/WeResponded";
import TestTaskCame from "./Components/TestTaskCame";
import IGotAnInvitationForAnInterview from "./Components/IGotAnInvitationForAnInterview";
import NeedToCall from "./Components/NeedToCall";
import { connect } from "react-redux";

import ClosedVacancies from "./Components/ClosedVacancies";

import TheOfferCame from "./Components/TheOfferCame";

class Crm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Общая база моих откликов</h3>
        <div className="allVacansies">
          <WeResponded></WeResponded>
          <TestTaskCame></TestTaskCame>
          <IGotAnInvitationForAnInterview></IGotAnInvitationForAnInterview>
          <NeedToCall></NeedToCall>
          <TheOfferCame></TheOfferCame>
          <ClosedVacancies></ClosedVacancies>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userJobs: state.userJobs,
  email: state.email
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Crm));
