import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Graf2 from './Graf2';
import { getUserJobsSaga } from '../../../../redux/action';

class SecondGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
  }

  render() {
    const nameArr = [
      'click',
      'respond',
      'tasc',
      'interview',
      'call',
      'offer',
      'close',
    ];

    const arrVacansy = this.props.userJobs.allVacansies;
    const dat = [];
    const test = [];
    for (
      let vacancyIndex = 0;
      vacancyIndex < arrVacansy.length;
      vacancyIndex++
    ) {
      const obj = {
        name: `${vacancyIndex}`,
        status: nameArr[4],
      };
      for (
        let propIndex = 0;
        propIndex < arrVacansy[vacancyIndex].timeTracker.length;
        propIndex++
      ) {
        obj[nameArr[propIndex]] = 1;
      }

      dat.push(obj);
    }
    const data = dat;

    return (
      <div>
        <Graf2 data={data} />
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
  connect(mapStateToProps, mapDispatchToProps)(SecondGraph),
);
