import React from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import ListStatus from "./Components/listStatus";
import { connect } from "react-redux";

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
          <ListStatus text="Жду ответа:" list="weResponded"></ListStatus>
          <ListStatus
            text="Прислали тестовое задание:"
            list="testTaskCame"
          ></ListStatus>
          <ListStatus
            text="Требуется перезвонить:"
            list="needToCall"
          ></ListStatus>
          <ListStatus
            text="Пригласили на интервью:"
            list="iGotAnInvitationForAnInterview"
          ></ListStatus>

          <ListStatus text="Прислали оффер:" list="theOfferCame"></ListStatus>
          <ListStatus
            text="Закрытые вакансии:"
            list="closedVacancies"
          ></ListStatus>
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
