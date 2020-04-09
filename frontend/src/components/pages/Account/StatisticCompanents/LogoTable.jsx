import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserJobsSaga } from '../../../../redux/action';
import Stars from './Stars';


class LogoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,

    };
  }

  render() {
    const data01 = [
      { vacancyIndex: 100, salary: 200, quantity: 200 }, { vacancyIndex: 120, salary: 100, quantity: 260 },
      { vacancyIndex: 170, salary: 300, quantity: 400 }, { vacancyIndex: 140, salary: 250, quantity: 280 },
      { vacancyIndex: 150, salary: 400, quantity: 500 }, { vacancyIndex: 110, salary: 280, quantity: 200 },
    ];
    const logoArr = [];
    const arrVacancy = this.props.userJobs.allVacansies;
    for (let index = 0; index < arrVacancy.length; index++) {
      if (arrVacancy[index].vacancy.employer.logo_urls != null) {
        const indexLogo = logoArr.findIndex((item) => item.companyId == arrVacancy[index].vacancy.employer.id);


        if (indexLogo != -1) {
          logoArr[indexLogo].quantity += 1;
        } else {
          const obj = {
            vacancyIndex: index,
            companyId: arrVacancy[index].vacancy.employer.id,
            companyName: arrVacancy[index].vacancy.employer.name,
            url: arrVacancy[index].vacancy.employer.url,
            logo: arrVacancy[index].vacancy.employer.logo_urls['240'],
            quantity: 1,
            salary: 40000,
          };
          if (arrVacancy[index].vacancy.salary != null) {
            let { to } = arrVacancy[index].vacancy.salary;
            let { from } = arrVacancy[index].vacancy.salary;

            if (from === null) { from = 40000; }
            if (to === null) { to = from + 20000; }
            if (from < 10000) { from *= 70; }
            if (to < 10000) { to *= 70; }
            obj.salary = Math.random((to - from) / 2 + from);
          }

          logoArr.push(obj);
        }
      }
    }
    return (
      <Stars data={logoArr} />

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
  connect(mapStateToProps, mapDispatchToProps)(LogoTable),
);
