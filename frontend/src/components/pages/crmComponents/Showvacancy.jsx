import React from 'react'
import Table from './Components/Table'
import {vacancyFetch} from '../../../allFetch/vacancyFetch'
import AddtoBase from './Components/AddtoBase'
import Filters from '../Main/Filters/Filters'
//хардкод для отображения  потом заменим на редакс
const data = [
  {id:1, title: 'Front-end', description: 'Desc', salary:100000, link: 'http://'},
  {id:2, title: 'Front-end', description: 'Desc', salary:100000, link: 'http://'},
  {id:3, title: 'Front-end', description: 'Desc', salary:100000, link: 'http://'}
]


class Showvacancy extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }
  componentDidMount() {}
  // getVacancy = async () => {
  //   let result = await vacancyFetch();
  //   this.setState({
  //     result: result
  //   });
  //   console.log('state:  ' + this.state.result);
    
  // };


  render() {
    return (
   <>
   <h1>Загрузить вакансии</h1>
   <div>
     <AddtoBase />
   </div>
      <div>
      </div>
    </>
    )
  }
}

export default Showvacancy
