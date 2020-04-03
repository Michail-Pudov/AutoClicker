import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './Account.module.css';


class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: '',
    };
  }

  render() {
    return (
      <div>
        <h2>Личный кабинет</h2>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  email: state.email,
});

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Account),
);
