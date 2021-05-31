
import { Bar } from "react-chartjs-2";
import API from "../utils/API";
import React, { Component, useState, useEffect } from "react";
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


const Chart = () => {
  // const [userProjectsInProgressJs, setUserProjectsInProgressJs] = useState([]);
  // const [userProjectsCompleteJs, setUserProjectsCompleteJs] = useState([]);
  // const [userProjectsInProgressReact, setUserProjectsInProgressReact] = useState([]);
  // const [userProjectsCompleteReact, setUserProjectsCompleteReact] = useState([]);
  // const [userProjectsInProgressAlg, setUserProjectsInProgressAlg] = useState([]);
  // const [userProjectsCompleteAlg, setUserProjectsCompleteAlg] = useState([]);
  
  useEffect(() => {
		loadUserProjects();
	}, []);


    const loadUserProjects = () => {
      API.getUser()
        .then((res) => {
          var userProjectsInProgressArray = res.data[0].projectsInProgress;
          var userProjectsCompleteArray = res.data[0].projectsComplete;
          var projInProgressJs = [];
          var projInProgressJs = [];
          var projInProgressReact = [];
          var projInProgressAlg = [];
          var projCompleteJs = [];
          var projCompleteReact = [];
          var projCompleteAlg = [];

          console.log(userProjectsInProgressArray);
          console.log(userProjectsCompleteArray);

          if (userProjectsInProgressArray) {
            console.log(userProjectsInProgressArray[0].language);

            for (i=0; i < userProjectsInProgressArray.length; i++) {
              if (userProjectsInProgressArray[i].language === "Javascript") {
                projInProgressJs.push(userProjectsInProgressArray[i]);
                console.log(projInProgressJs);
              };
  
            }};
            
        //   setUserProjectsInProgressJs(
        //     userProjectsInProgressArray.filter((jsProjInProgress) => jsProjInProgress.language === "Javascript")
        //   );
        //   console.log(userProjectsInProgressJs);
         

        //   setUserProjectsInProgressReact(
        //     userProjectsInProgressArray.filter((ReactProjInProgress) => ReactProjInProgress.language === "React")
        //     );
        //   console.log(userProjectsInProgressReact);

        //   setUserProjectsInProgressAlg(
        //     userProjectsInProgressArray.filter((AlgProjInProgress) =>
        //     AlgProjInProgress.language === "Algorithm")
        //   );
        //   console.log(userProjectsInProgressAlg);
        // };

        // if (userProjectsCompleteArray) {
        //   setUserProjectsCompleteJs(
        //     userProjectsCompleteArray.filter((jsProjComplete) => jsProjComplete.language === "Javascript")
        //   );
        //   console.log(userProjectsCompleteJs);

        //   setUserProjectsCompleteReact(
        //     userProjectsCompleteArray.filter((ReactProjComplete) => ReactProjComplete.language === "React")
        //     );
        //     console.log(userProjectsCompleteReact);
         
        //   setUserProjectsCompleteAlg(
        //     userProjectsCompleteArray.filter((AlgProjComplete) =>
        //     AlgProjComplete.language === "Algorithm")
        //   );
        //   console.log(userProjectsCompleteAlg);
        // };
  
        })
        .catch((err) => console.log(err));
      };
    
    // API.getUser().then((res) => {
    //   console.log("array of user objects", res.data)
    //   console.log("states' array contents", this.state)
    //   // const projectsInProgress = res.data;
    //   const totalCompleted = res.data[0].projectsComplete.length;
    //   const totalInProg = res.data[0].projectsInProgress.length;
    //   // const totalInProgJS = res.data[0].projectsInProgress.length;

    //   console.log("total completed", totalCompleted)
    //   console.log("total in progress", totalInProg)
    
    //   this.setState({
    //     inProgress: totalInProg,
    //     completed: totalCompleted,
    //   })
    // })
  
  
    return (
      <div className='container'>
        	<h5 className="pageTitle text-center pt-5">My progress</h5>
          {/* <Bar data={data} /> */}
      </div>
    );
  
};


export default Chart;

// addInProg = () => {
    
  // }
  
  // addCompleted = () => {

  // }

  // componentDidMount() {
    // API.addUserProjectInProgress().then((res) => {
    //   console.log("this", res.data)
    // })
 // setUserProjects(res.data[0]);
          // console.log(userProjectsArray);
          // setUserProjects(userProjectsArray);
          // console.log(userProjects);