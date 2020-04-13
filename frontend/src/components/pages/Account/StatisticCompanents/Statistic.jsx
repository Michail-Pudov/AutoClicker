import React from 'react';
import FirstGraph from './FirstGraph';
import SecondGraph from './SecondGraph';
import ThirdGraph from './ThirdGraph';
import { statisticBlock } from "../Account.module.css";

class Statistic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={statisticBlock}>
        <SecondGraph />
        <br />
        <ThirdGraph />
        <br />
        <FirstGraph />
      </div>
    );
  }
}

export default Statistic;
