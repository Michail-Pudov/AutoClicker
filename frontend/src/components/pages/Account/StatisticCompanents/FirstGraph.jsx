import React from 'react'
import { ComposedChart, Legend, Area, Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { connect } from "react-redux";



class FirstGraph extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data1:0
    }
  }

  async componentDidMount() {

let response = await fetch('/account/getdata')
let result = await response.json();
    
    this.setState({
      data1: result.data
    });
  }



  render() {
    return (
      <div>
        <ComposedChart width={730} height={250} data={this.state.data1}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </div>
    )
  }





}

export default FirstGraph
