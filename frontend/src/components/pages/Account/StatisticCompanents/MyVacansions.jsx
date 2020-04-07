import React, { Component } from 'react'

class MyVacansions extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <a
              href='https://hh.ru/applicant/vacancy_response?vacancyId=36383479'
              onClick={async function() {
                let response = await fetch(
    `https://hh.ru/applicant/vacancy_response?vacancyId=36383479`, {
    method: 'POST'})}}>Кликни</a>
      </div>
    )
  }
}

export default MyVacansions

