import React from 'react'
import FirstGraph from './FirstGraph'
import SecondGraph from './SecondGraph'
import ThirdGraph from './ThirdGraph'
import MyVacansions from './MyVacansions'
import LogoTable from './LogoTable'


class Statistic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <MyVacansions />
        <br />        
        <SecondGraph />
        <br />
        <ThirdGraph />
        <br />
        <FirstGraph />
        <br />
        {/* <LogoTable />         */}
      </div>
    )
  }
}

export default Statistic
