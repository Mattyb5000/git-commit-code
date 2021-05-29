import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
// what do I need to import to get the project status data?

const data = {
    labels: ['JavaScript', 'Algorithms', 'React'],
    datasets: [
      {
        label: 'In-progress',
        // need to pull in-prog js, alg, react totals ($size) from DB
        data: [12, 19, 2],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Completed',
         // need to pull completed js, alg, react totals ($size) from DB
        data: [2, 3, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };
class Chart extends Component {
  render() {
    return (
      <div className='container'>
        	<h5 className="pageTitle text-center pt-5">My progress</h5>
          <Bar data={data} />
      </div>
    );
  }
}

export default Chart;
