import React from 'react'
import Percent from './Persent'
import { connect } from "react-redux";
import { getUserJobsSaga } from "../../../../redux/action";
import { withRouter } from "react-router-dom";


class FirstGraph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 0

    }
  }





  render() {

    const vacancyObj = this.props.userJobs
    const data = [
      {
        month: 'Тестовое', a: vacancyObj.testTaskCame.length, b: vacancyObj.allVacansies.length-vacancyObj.testTaskCame.length, c: Math.round(Math.random()*30),
      },
      {
        month: 'Интервью', a: vacancyObj.iGotAnInvitationForAnInterview.length, b: vacancyObj.allVacansies.length-vacancyObj.iGotAnInvitationForAnInterview.length, c: Math.round(Math.random()*30),
      },
      {
        month: 'Созвон', a: vacancyObj.needToCall.length, b: vacancyObj.allVacansies.length-vacancyObj.needToCall.length, c: Math.round(Math.random()*30),
      },
      {
        month: 'Оффер', a: vacancyObj.theOfferCame.length, b: vacancyObj.allVacansies.length-vacancyObj.theOfferCame.length, c: Math.round(Math.random()*30),
      },
      {
        month: 'Ожидаем', a: vacancyObj.weResponded.length, b: vacancyObj.allVacansies.length-vacancyObj.weResponded.length, c: Math.round(Math.random()*30),
      },
      {
        month: 'Отказ', a: vacancyObj.closedVacancies.length, b: vacancyObj.allVacansies.length-vacancyObj.closedVacancies.length, c: Math.round(Math.random()*30),
      }
      
    ];




    return (
      <div>
        <Percent data={data}/>
      </div>
    )
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
