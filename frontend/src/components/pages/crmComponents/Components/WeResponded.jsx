import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import ModalAndCard from "./components/ModalAndCard";

class WeResponded extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="weResponded">
        <h4>Жду ответа:</h4>
        {this.props.userJobs.weResponded.map((item, index) => {
          return <ModalAndCard item={item} index={index}></ModalAndCard>;
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
  connect(mapStateToProps, mapDispatchToProps)(WeResponded)
);
