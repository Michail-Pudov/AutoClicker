import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import ModalAndCard from "./components/ModalAndCard";

class ListStatus extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { text, list } = this.props;
    return (
      <div className={list}>
        <h4>{text}</h4>
        {this.props.userJobs[list].map((item, index) => {
          return (
            <ModalAndCard
              item={item}
              index={item.vacancy.id}
              keyArray={list}
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
  connect(mapStateToProps, mapDispatchToProps)(ListStatus)
);
