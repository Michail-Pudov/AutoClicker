import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Graf3 from './Graf3';
import { getUserJobsSaga } from '../../../../redux/action';
import Stars from './Stars';


class ThirdGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,

    };
  }

  render() {
    const arrVacansy = this.props.userJobs.allVacansies;
    const dat = [];
    let realIndex = 0;

    for (let vacancyIndex = 0; vacancyIndex < arrVacansy.length; vacancyIndex++) {
      if (arrVacansy[vacancyIndex].vacancy.salary != null) {
        let { to } = arrVacansy[vacancyIndex].vacancy.salary;
        let { from } = arrVacansy[vacancyIndex].vacancy.salary;

        if (from === null) { from = 40000; }
        if (to === null) { to = from + 20000; }
        if (from < 10000) { from *= 70; }
        if (to < 10000) { to *= 70; }
        const indexCompany = dat.findIndex((item) => item.companyId == arrVacansy[vacancyIndex].vacancy.employer.id);


        if (indexCompany != -1) {
          dat[indexCompany].quantity += 1;
        }

        let logoUrl = 'https://png2.cleanpng.com/sh/b634578dcd7e8ab7789828f3179784e1/L0KzQYm3VMAyN5lofZH0aYP2gLBuTf1wdpZAReJqeX3ofsW0hfxma6V3h9DyYz3phbBrk711epJzi9hucj3mf773lgRmel5uRd94bnX8PbPoh702aZQ1fKcDNEfmQYLsUr4yQWE7UKs7MkG4QoO8WMcxOWM6SKo7LoDxd1==/kisspng-money-payment-electronic-funds-transfer-computer-i-money-bag-5ac0d5847c11e2.1906892215225870125082.png';

        if (arrVacansy[vacancyIndex].vacancy.employer.logo_urls != null) {
          logoUrl = arrVacansy[vacancyIndex].vacancy.employer.logo_urls['240'];
        }


        const salaryVacancy = {
          companyId: arrVacansy[vacancyIndex].vacancy.employer.id,
          name: realIndex,
          title: arrVacansy[vacancyIndex].vacancy.name,
          salaryFrom: from,
          salaryTo: to,
          averege: Math.round((to - from) / 2 + from),
          quantity: 1,
          logoUrl,
          companyName: arrVacansy[vacancyIndex].vacancy.employer.name,
        };
        realIndex += 1;
        dat.push(salaryVacancy);
      }
    }
    const data = dat;


    return (
      <div>
        <Stars data={data} />
        <Graf3 data={data} />

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
  connect(mapStateToProps, mapDispatchToProps)(ThirdGraph),
);
