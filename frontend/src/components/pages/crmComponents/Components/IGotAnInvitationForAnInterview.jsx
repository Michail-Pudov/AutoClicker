import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class IGotAnInvitationForAnInterview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="IGotAnInvitationForAnInterview">
        <h4>Позвали на интервью:</h4>
        {this.props.userJobs.iGotAnInvitationForAnInterview.map(
          (item, index) => {
            return <div>{item.vacancy.name}</div>;
          }
        )}
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
  connect(mapStateToProps, mapDispatchToProps)(IGotAnInvitationForAnInterview)
);
