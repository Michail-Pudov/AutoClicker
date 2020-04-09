import React from 'react';
import FirstGraph from './FirstGraph';
import SecondGraph from './SecondGraph';
import ThirdGraph from './ThirdGraph';
import MyVacansions from './MyVacansions';


class Statistic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <MyVacansions />
        <br />
        <FirstGraph />
        <br />
        <br />
        <SecondGraph />
        <br />
        <ThirdGraph />
        <br />
      </div>
    );
  }
}

export default Statistic;
