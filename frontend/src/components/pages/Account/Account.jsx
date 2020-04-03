import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import classes from './Account.module.css';
import Crm from "../crmComponents/Crm";

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: ""
    };
  }

  render() {
    return (
      <>
        <div>
          <h2>Личный кабинет</h2>
        </div>
        <div>
          <Crm data={this.state.result} />
          <b>AutoClicker</b>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email
});

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Account)
);
