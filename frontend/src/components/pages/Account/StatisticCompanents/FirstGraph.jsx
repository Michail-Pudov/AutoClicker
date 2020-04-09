import React from "react";
import Percent from "./Persent";
import { connect } from "react-redux";
import { getUserJobsSaga } from "../../../../redux/action";
import { withRouter } from "react-router-dom";

class FirstGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
  }

  //   import React from 'react';
  // import {
  //   ComposedChart, Legend, Area, Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  // } from 'recharts';

  // const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: 'Page G',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  // class FirstGraph extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       data1: 0,
  //     };
  //   }

  //   async componentDidMount() {
  //     const response = await fetch('/account/getdata');
  //     const result = await response.json();

  //     this.setState({
  //       data1: result.data,
  //     });
  //   }

  render() {
    const vacancyObj = this.props.userJobs;
    const data = [
      {
        month: "Тестовое",
        a: vacancyObj.testTaskCame.length,
        b: vacancyObj.allVacansies.length - vacancyObj.testTaskCame.length,
        c: Math.round(Math.random() * 30)
      },
      {
        month: "Интервью",
        a: vacancyObj.iGotAnInvitationForAnInterview.length,
        b:
          vacancyObj.allVacansies.length -
          vacancyObj.iGotAnInvitationForAnInterview.length,
        c: Math.round(Math.random() * 30)
      },
      {
        month: "Созвон",
        a: vacancyObj.needToCall.length,
        b: vacancyObj.allVacansies.length - vacancyObj.needToCall.length,
        c: Math.round(Math.random() * 30)
      },
      {
        month: "Оффер",
        a: vacancyObj.theOfferCame.length,
        b: vacancyObj.allVacansies.length - vacancyObj.theOfferCame.length,
        c: Math.round(Math.random() * 30)
      },
      {
        month: "Ожидаем",
        a: vacancyObj.weResponded.length,
        b: vacancyObj.allVacansies.length - vacancyObj.weResponded.length,
        c: Math.round(Math.random() * 30)
      },
      {
        month: "Отказ",
        a: vacancyObj.closedVacancies.length,
        b: vacancyObj.allVacansies.length - vacancyObj.closedVacancies.length,
        c: Math.round(Math.random() * 30)
      }
    ];

    return (
      <div>
        <Percent data={data} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userJobs: state.userJobs,
  email: state.email
});

const mapDispatchToProps = {
  getUserJobsSaga
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FirstGraph)
);
