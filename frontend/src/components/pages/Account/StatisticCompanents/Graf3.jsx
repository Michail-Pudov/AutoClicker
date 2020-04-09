import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';



export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q5atk5jr/';

  render() {
    return (
      <ComposedChart
        width={1000}
        height={400}
        data={this.props.data}
        margin={{
          top: 20, right: 80, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" label={{ value: 'Вакансии', position: 'insideBottomRight', offset: 0 }} />
        <YAxis label={{ value: 'Зарплаты, RUR', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="salaryTo" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="salaryFrom" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="averege" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}
