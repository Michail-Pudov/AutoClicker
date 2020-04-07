import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import ModalAndCard from "./components/ModalAndCard";

class ClosedVacancies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="ClosedVacancies">
        <h4>Закрытые вакансии:</h4>
        {this.props.userJobs.closedVacancies.map((item, index) => {
          return (
            <ModalAndCard
              item={item}
              index={item.vacancy.id}
              keyArray={"closedVacancies"}
              indexInArray={index}
            ></ModalAndCard>
          );
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
