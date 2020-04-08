import React from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import ListStatus from "./Components/listStatus";
import ScrollTo from "../../ScrollTo/ScrollTo";

class Crm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <h3>Общая база моих откликов</h3>
        <ScrollTo />

        <div className=" allVacansies">
          <div className="col s12">
            <ListStatus text="Жду ответа:" list="weResponded" />
            <ListStatus text="Прислали тестовое задание:" list="testTaskCame" />
            <ListStatus text="Требуется перезвонить:" list="needToCall" />
          </div>
          <div className="col s12">
            <ListStatus
              text="Пригласили на интервью:"
              list="iGotAnInvitationForAnInterview"
            />

            <ListStatus text="Прислали оффер:" list="theOfferCame" />
            <ListStatus text="Закрытые вакансии:" list="closedVacancies" />
          </div>
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
