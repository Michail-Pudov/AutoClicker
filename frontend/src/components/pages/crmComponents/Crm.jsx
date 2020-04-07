import React from 'react';
import {
  Switch, Route, withRouter, Link,
} from 'react-router-dom';
import WeResponded from './Components/WeResponded';
import TestTaskCame from './Components/TestTaskCame';
import IGotAnInvitationForAnInterview from './Components/IGotAnInvitationForAnInterview';
import NeedToCall from './Components/NeedToCall';

import ClosedVacancies from './Components/ClosedVacancies';

import TheOfferCame from './Components/TheOfferCame';
import ScrollTo from '../../ScrollTo/ScrollTo';

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
          <ScrollTo />
          <WeResponded />
          <TestTaskCame />
          <IGotAnInvitationForAnInterview />
          <NeedToCall />
          <TheOfferCame />
          <ClosedVacancies />
        </div>
      </div>
    );
  }
}

export default Crm;
