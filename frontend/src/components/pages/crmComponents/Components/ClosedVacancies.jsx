import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class ClosedVacancies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ClosedVacancies">
        <h4>Закрытые вакансии:</h4>
        {this.props.userJobs.closedVacancies.map((item, index) => {
          return <div>{item.vacancy.name}</div>;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userJobs: state.userJobs,
  email: state.email
});

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClosedVacancies)
);
