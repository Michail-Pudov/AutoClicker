import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Dots from './Dots'




export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3mw50Lc9/';

  render() {






    return (
      <ScatterChart
        width={1000}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="name" name="index" />
        <YAxis type="number" dataKey="averege" name="salary" unit="R" />
        <ZAxis type="number" dataKey="quantity" range={[60, 400]} name="quantity" unit=" вакансий" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Зарплаты/Количество" data={this.props.data} fill="#8884d8" shape={<Dots data={this.props.data} />} />
        
      </ScatterChart>
    );
  }
}
