import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
} from 'recharts';



export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart
        width={1000}
        height={400}
        data={this.props.data}
        margin={{
          top: 20, right: 20, left: 20, bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis label={{ value: 'Статусы', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        
        <Brush dataKey="name" height={30} stroke="#8884d8" />

        <Bar dataKey="click" stackId="a" fill="#0088FE" />
        <Bar dataKey="respond" stackId="a" fill="#82ca9d" />
        <Bar dataKey="tasc" stackId="a" fill="#8884d8" />
        <Bar dataKey="interview" stackId="a" fill="#00C49F" />
        <Bar dataKey="call" stackId="a" fill="#FFBB28" />
        <Bar dataKey="offer" stackId="a" fill="#FF8042" />
        <Bar dataKey="close" stackId="a" fill="#8784d6" />
        
      </BarChart>
    );
  }
}
