import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
import API from "../utils/API";
import Chart from "../components/Chart";
import ProjectForm from "../components/ProjectForm";
import DataTable from "react-data-table-component";
import "./Profile.css";

const Profile = () => {
	const [userProjects, setUserProjects] = useState([]);
	const [clickedProjects, setClickedProjects] = useState({});
	

	// loads all projects and sets them to projects
	useEffect(() => {
		loadUserProjects();
	}, []);

	const loadUserProjects = () => {
		API.getUser()
			.then((res) => {
				var userProjectsArray = res.data[0].projectsInProgress;
				// setUserProjects(res.data[0]);
				// console.log(userProjectsArray);
				setUserProjects(userProjectsArray);
				// console.log(userProjects);
			})
			.catch((err) => console.log(err));
	};

	var dataArray = userProjects;

	console.log(dataArray);

	const data = dataArray;

	const columns = [
		
		{
			name: "Project Name",
			selector: "title",
			sortable: true,
			maxWidth: "250px",
		},
		{
			name: "Link",
			selector: "link",
			sortable: false,
			maxWidth: "200px",
		},
		
		{
			name: "Language",
			selector: "language",
			sortable: true,
			maxWidth: "150px",
		},
	];

	const handleChange = (state) => {
		console.log("Selected Rows: ", state.selectedRows);
		
		//export title to Form
		var projectId = state.selectedRows[0]._id;
		console.log("project id is " + projectId);
		var projectTitle = state.selectedRows[0].title;
		console.log('project title is ' + projectTitle);
		var project = state.selectedRows[0];
		console.log(project);
		setClickedProjects({...project});
		
		
		//remove project from user's projects in progress
	};

	console.log(clickedProjects);

	return (
		<div className="brick_background">
			<Navbar2 />
			<div className="container-fluid pageTitle">
				<h5 className="pageTitle text-center pt-5">My Profile</h5>
			</div>
			<div className="container">
				<div className="row d-flex justify-content-around"></div>
				<div className="col-9 ">
					<DataTable
						// className="table-bordered  projectTable w-100 table table-dark">
						className="rdt_Table"
						title="Projects In Progress"
						columns={columns}
						data={data}
						selectableRows
						// // Clicked
						onSelectedRowsChange={handleChange}
					/>
				</div>

				<div className="col-12, col-md-12"></div>
			</div>

			<ProjectForm clickedProj={clickedProjects} />

			<Chart />
		</div>
	);
};

export default Profile;

	/* <thead className="table-info table table-dark">
						<tr>
							<th scope="col">Project Name</th>
							<th scope="col">Project Language</th>
							<th scope="col">Project Link</th>
							<th scope="col">Submit Completed Project</th>
						</tr>
					</thead> */

	/* <tbody className="projectRow">
						{userProjects.map((proj) => (
							<tr key={proj._id}>
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
					</tbody> */

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
