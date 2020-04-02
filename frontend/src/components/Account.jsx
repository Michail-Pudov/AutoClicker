import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Filters from "./Filters";

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: ""
    };
  }

  render() {
    return (
      <div>
        <Filters></Filters>
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
