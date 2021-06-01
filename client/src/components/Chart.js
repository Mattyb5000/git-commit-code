
import { Bar } from "react-chartjs-2";
import API from "../utils/API";
import React, { Component, useState, useEffect } from "react";

const Chart = () => {

  const [projInProgressJs, setProjInProgressJs] = useState([]);
  const [projCompleteJs, setProjCompleteJs] = useState([]);
  const [projInProgressReact, setProjInProgressReact] = useState([]);
  const [projCompleteReact, setProjCompleteReact] = useState([]);
  const [projInProgressAlg, setProjInProgressAlg] = useState([]);
  const [projCompleteAlg, setProjCompleteAlg] = useState([]);
  
  useEffect(() => {
		loadUserProjects();
	}, []);

    const loadUserProjects = () => {
      API.getUser()
        .then((res) => {
          var projInProgressArray = res.data[0].projectsInProgress;
          var projCompleteArray = res.data[0].projectsComplete;

          if (projInProgressArray) {
                      
            setProjInProgressJs(projInProgressArray.filter((jsProjInProgress) => jsProjInProgress.language === "Javascript"));

            setProjInProgressReact(projInProgressArray.filter((reactProjInProgress) => reactProjInProgress.language === "React"));
            
            setProjInProgressAlg(projInProgressArray.filter((algProjInProgress) => algProjInProgress.language === "Algorithm"));
            
            } else {
              alert('Please visit the project pages to add projects in progress.');
            };
            
            if (projCompleteArray) {
                      
              setProjCompleteJs(projCompleteArray.filter((jsProjComplete) => jsProjComplete.language === "Javascript"));
              
              setProjCompleteReact(projCompleteArray.filter((reactProjComplete) => reactProjComplete.language === "React"));
              
            setProjCompleteAlg(projCompleteArray.filter((algProjComplete) => algProjComplete.language === "Algorithm"));
              
     } else {
      alert('Please complete and submit projects to add to your projects completed chart!');
    };
  })};

     const data = {
      labels: ['JavaScript', 'Algorithms', 'React'],
      datasets: [
        {
          label: 'In-progress',
          // need to pull in-prog js, alg, react totals from DB
      data: [projInProgressJs.length, projInProgressAlg.length, projInProgressReact.length ],
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Completed',
           // need to pull completed js, alg, react totals from DB
          data: [projCompleteJs.length, projCompleteAlg.length, projCompleteReact.length],
          backgroundColor: 'rgb(54, 162, 235)',
        },
      ],
    };

    return (
      <div className='container'>
        	<h5 className="pageTitle text-center pt-5">My progress</h5>
          <Bar data={data} />
      </div>
    );
  
};

export default Chart;
