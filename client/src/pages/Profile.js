import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
// import ProjectCard from "../components/ProjectCard/index.js";
import API from "../utils/API";
import Chart from "../components/Chart";
import ProjectForm from "../components/ProjectForm";
import { Form } from "react-bootstrap";

const Profile = () => {
	const [userProjects, setUserProjects] = useState([]);
	// const [projects, setProjects] = useState([]);

	// loads all projects and sets them to projects
	useEffect(() => {
		loadUserProjects();
	}, []);

	const loadUserProjects = () => {
		console.log("you are in the load projects function on profile page");

		API.getUsers()
			.then((res) => {
				console.log(res.data);
				setUserProjects(res.data[0].projectsInProgress);
				// const userProjInProg = res.data[0].projectsInProgress;
				// setUserProjects(userProjInProg);
			})
			.catch((err) => console.log(err));
	};
	console.log("Is user projects", userProjects);

  // const handleProjectBut = id => {
function handleProjectBut(event) {
	// const rowId = event.target.parentNode.parentNode.id;
	// console.log(rowId);

	// console.log("you clicked select button");
	// const id = e.target.id;
	// console.log(id);
	// console.log(id);
	// var title = this.closest("tr").find(".title").text();
	// console.log(title);
console.log("hello");
};
	

	return (
		<div className="brick_background">
			<Navbar2 />
			<div className="container-fluid pageTitle">
				<h5 className="pageTitle text-center pt-5">My Profile</h5>
			</div>
			<div className="container-fluid">
				<div className="row d-flex justify-content-around"></div>
				<div className="col-12, col-md-12 table table-dark">
					<table className="table-bordered  projectTable w-100">
						<thead className="table-info">
							<tr>
								
								<th scope="col">Project Name</th>
								<th scope="col">Project Language</th>
								<th scope="col">Project Link</th>
								<th scope="col">Submit Completed Project</th>
							</tr>
						</thead>
						<tbody className="projectRow">
						{userProjects.map((proj) => (
							                
							<tr>
								
								<td>{proj.title}</td>
								<td>{proj.language}</td>
								<td>{proj.link}</td>
								<td>
									<button
										type="button"
										id={proj._id}
										// data={req.session.user_id}
										// data={req.session.user_id}
										className="btn btn-secondary selectProjectBut"
									>
										Submit Project
									</button>
								</td>
							</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="col-12, col-md-12"></div>
			</div>
			<h5 className="pageTitle text-center pt-5">My progress</h5>
      <ProjectForm />
      
			<Chart />
		</div>
	);
};

export default Profile;
  
  // 	API.getProjects()
  // 		.then((res) => {
  // 			console.log(res.data);
  // 			setProjects(res.data);
  // 		})
  // 		.catch((err) => console.log(err));
  // };

  // console.log("Projects", projects);

  // {(req.session.user_id)}

  // const userProj = user[0].projects;
  // console.log(userProj);

  // const newProjectArray = userProj.map((userProj) =>
  // 	projectArray.filter((project) => project.project_id === userProj)
  // );

  // console.log(newProjectArray);
  // setProjects(newProjectArray);
  // console.log(projects);

  //once I'm using the API, the projects need to be sorted in setProjects function within curly braces
  //.then((res) => setProjects(res.data))
// };
//   return (
//     <div>
//       <Navbar2 />
//       <div className="container-fluid pageTitle">
//         <h5 className="pageTitle text-center pt-5">My Profile</h5>
//       </div>
//       <div className="container-fluid">
//         <div className="row d-flex justify-content-around"></div>
//         <div className="col-12, col-md-12">
//           <table className="table-bordered  projectTable w-100">
//             <thead className="table-info">
//               <tr>
//                 {/* <th scope="col">Project Number</th> */}
//                 <th scope="col">Project Name</th>
//                 <th scope="col">Project Language</th>
//                 <th scope="col">Project Link</th>
//                 <th scope="col">Submit Completed Project</th>
//               </tr>
//             </thead>
//             <tbody className="projectRow">
//               {userProjects.map((proj) => (
//                 <tr>
//                   {/* <th scope="row">1</th> */}
//                   <td>{proj.title}</td>
//                   <td>{proj.language}</td>
//                   <td>{proj.link}</td>
//                   <td>
//                     <button
//                       type="button"
//                       id={proj._id}
//                       // data={req.session.user_id}
//                       // data={req.session.user_id}
//                       className="btn btn-secondary selectProjectBut"
//                     >
//                       Submit Project
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="col-12, col-md-12"></div>
//       </div>
     
  //   </div>
  // );



// return (
//   <div>
//     <Navbar2 />
//     <div className="container-fluid pageTitle">
//       <h5 className="pageTitle text-center pt-5">My Profile</h5>
//     </div>
//     <div className="container-fluid">
//       <div className="row d-flex justify-content-around"></div>
//       <div className="col-12, col-md-12">
//         <table className="table-bordered  projectTable w-100">
//           <thead className="table-info">
//             <tr>
//               <th scope="col">Project Name</th>
//               <th scope="col">Project Language</th>
//               <th scope="col">Project Link</th>
//               <th scope="col">Submit Completed Project</th>
//             </tr>
//           </thead>
//           <tbody className="projectRow">
//             {userProjects.map((proj) => (
//               <tr id={proj._id}>
//                 <td className="title">{proj.title}</td>
//                 <td className="language">{proj.language}</td>
//                 <td>{proj.link}</td>
//                 <td>
//                   <button
//                     // onClick={() => handleProjectBut(proj._id)}
//                     // onClick={() => handleProjectBut()}
//                     onClick={() => handleProjectBut()}
//                     id={proj._id}
//                     title={proj.title}
//                     language={proj.language}
//                     // data={req.session.user_id}
//                     // data={req.session.user_id}
//                     className="btn btn-secondary selectProjectBut"
//                   >Submit Project
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* submit form */}
//       <div className="col-12, col-md-12">
//         <Form.Group className="submitProjectForm">
//           <Form.Control size="text" type="text" placeholder="Project Name" />
//           <br />
//           <Form.Control size="text" type="text" placeholder="User Name" />
//           <br />
//           <Form.Control size="text" type="text" placeholder="Deployed URL" />
//           <br />
//         </Form.Group>
//       </div>
//     </div>

//     <Chart />
//   </div>
// );
// };

// export default Profile;


// {
/* <h5 className="pageTitle text-center pt-5">My Profile</h5>
			<div className="container-fluid">
				<div className="row d-flex">
					<div className="col-sm-7">
						
					</div>
				</div>
</div> */
// }
// 	API.getProjects()
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setProjects(res.data);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	// console.log("Projects", projects);

	// {(req.session.user_id)}

	// const userProj = user[0].projects;
	// console.log(userProj);

	// const newProjectArray = userProj.map((userProj) =>
	// 	projectArray.filter((project) => project.project_id === userProj)
	// );

	// console.log(newProjectArray);
	// setProjects(newProjectArray);
	// console.log(projects);

	//once I'm using the API, the projects need to be sorted in setProjects function within curly braces
	//.then((res) => setProjects(res.data))
