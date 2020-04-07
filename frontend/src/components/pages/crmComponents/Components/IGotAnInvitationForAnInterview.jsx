import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import ModalAndCard from "./components/ModalAndCard";

class IGotAnInvitationForAnInterview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="IGotAnInvitationForAnInterview">
        <h4>Пригласили на интервью:</h4>
        {this.props.userJobs.iGotAnInvitationForAnInterview.map(
          (item, index) => {
            return (
              <ModalAndCard
                item={item}
                index={item.vacancy.id}
                keyArray={"iGotAnInvitationForAnInterview"}
                indexInArray={index}
              ></ModalAndCard>
            );
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
