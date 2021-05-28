import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const data = {
    labels: ['JavaScript', 'Algorithms'],
    datasets: [
      {
        label: 'In-progress',
        data: [12, 19],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Completed',
        data: [2, 3],
        backgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };
class Chart extends Component {
  render() {
    return (
      <div className='container'>
          <Bar data={data} />
      </div>
    );
  }
}

export default Chart;
