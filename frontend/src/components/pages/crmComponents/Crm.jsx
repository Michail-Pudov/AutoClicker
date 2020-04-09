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
        <h3>Сохраненные вакансии</h3>
        <ScrollTo />

        <div className=" allVacansies">
          <div className="col s12">
            <ListStatus
              text="Жду ответа:"
              list="weResponded"
              colorList="light-blue accent-4"
            />
            <ListStatus
              text="Прислали тестовое задание:"
              list="testTaskCame"
              colorList="indigo lighten-2"
            />
            <ListStatus
              text="Требуется перезвонить:"
              list="needToCall"
              colorList="amber"
            />
          </div>
          <div className="col s12">
            <ListStatus
              text="Пригласили на интервью:"
              list="iGotAnInvitationForAnInterview"
              colorList="teal accent-3"
            />

            <ListStatus
              text="Прислали оффер:"
              list="theOfferCame"
              colorList="deep-orange lighten-1"
            />
            <ListStatus
              text="Закрытые вакансии:"
              list="closedVacancies"
              colorList="deep-purple lighten-2"
            />
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
