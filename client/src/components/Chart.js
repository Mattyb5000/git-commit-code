import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import API from "../utils/API";
// import FakeUserAPI from "../utils/FakeUserAPI";

const data = {
    labels: ['JavaScript', 'Algorithms', 'React'],
    datasets: [
      {
        label: 'In-progress',
        // need to pull in-prog js, alg, react totals from DB
        data: [12, 19, 2],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Completed',
         // need to pull completed js, alg, react totals from DB
        data: [2, 3, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };


class Chart extends Component {
  state = {
    inProgress: [],
    completed: [],
  };

  addInProg = () => {
    
  }
  
  addCompleted = () => {

  }

  componentDidMount() {
    // API.addUserProjectInProgress().then((res) => {
    //   console.log("this", res.data)
    // })
    API.getUser().then((res) => {
      console.log("array of user objects", res.data)
      console.log("states' array contents", this.state)
      // const projectsInProgress = res.data;
      const totalCompleted = res.data[0].projectsComplete.length;
      const totalInProg = res.data[0].projectsInProgress.length;
      // const totalInProgJS = res.data[0].projectsInProgress.length;

      console.log("total completed", totalCompleted)
      console.log("total in progress", totalInProg)
    
      this.setState({
        inProgress: totalInProg,
        completed: totalCompleted,
      })
    })
  }
  render() {
    return (
      <div className='container chart'>
        	<h5 className="pageTitle text-center pt-5">My progress</h5>
          <Bar data={data} />
      </div>
    );
  }
}


export default Chart;
