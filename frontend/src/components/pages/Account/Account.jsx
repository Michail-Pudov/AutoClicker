import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getUserJobsSaga } from '../../../redux/action';
import Statistic from './StatisticCompanents/Statistic';
import {
  saveVacancy, linkSize, headingStat, linkBlock,
} from './Account.module.css';
import ScrollTo from '../../ScrollTo/ScrollTo';


class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getUserJobsSaga(localStorage.email);
  }

  render() {
    return (
      <div className="">
        <ScrollTo />
        <div className={linkBlock}>
          <Link className={linkSize} to="/crm">
            <div className={saveVacancy}>
              Сохраненные вакансии
            </div>
          </Link>
        </div>

        <div className={headingStat}>
          <h3>Статистика</h3>
          <Statistic />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userJobs: state.userJobs,
  email: state.email,
});

const mapDispatchToProps = {
  getUserJobsSaga,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Account),
);
