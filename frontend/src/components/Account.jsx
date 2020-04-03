import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Crm from './Crm'
import {vacancyFetch} from '../allFetch/vacancyFetch'

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
      result: {},
    };
  }
  getVacancy = async () => {
    let result = await vacancyFetch();
    this.setState({
      result: result
    });
   

  };
  render() {
    return (
      <div>
      <Crm data={this.state.result}/>
        <b>AutoClicker</b>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.email
  };
};

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Account)
);
