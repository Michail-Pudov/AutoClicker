import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class TheOfferCame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="TheOfferCame">
        <h4>Прислали оффер:</h4>
        {this.props.userJobs.theOfferCame.map((item, index) => {
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
  connect(mapStateToProps, mapDispatchToProps)(TheOfferCame)
);
