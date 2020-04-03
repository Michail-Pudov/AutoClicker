import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter, Link } from "react-router-dom";
import {vacancyFetch} from '../allFetch/vacancyFetch'

class Crm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  

  render() {
    return (
      <>
        <h1>Общая база моих откликов</h1>
        <div className='crmNav'>
          <Link to='/crm/show-vacancy'>Посмотреть вакансии</Link>
          <br />
          <Link to='/crm/add'>Добавить вакансию</Link>

        </div>
      </>
    )
  }
}

export default Crm
