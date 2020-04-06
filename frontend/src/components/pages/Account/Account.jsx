import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <h2>Личный кабинет</h2>
        </div>
        <div>
          <Link to="/crm">Зайти в текущую базу</Link>
          <br />
          <b>Здесь будет статистика</b>
        </div>
      </>
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
