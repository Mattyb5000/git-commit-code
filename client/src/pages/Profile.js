import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
// import ProjectCard from "../components/ProjectCard/index.js";
import API from "../utils/API";
import Chart from "../components/Chart";

const Profile = () => {
	const [userProjects, setUserProjects] = useState([]);
	const [projects, setProjects] = useState([]);

	// loads all projects and sets them to projects
	useEffect(() => {
		loadUserProjects();
	}, []);

	function loadUserProjects() {
		console.log("you are in the load projects function on profile page");
	// 	API.getProjects()
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setProjects(res.data);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	// console.log("Projects", projects);
	
		API.getUsers()
		.then((res) => {
			console.log(res.data);
			const users = res.data.filter((user) =>
			user._id === "60b0238ef4c49807a04ab254");
			console.log(users);
			
		});
		
	 	// {(req.session.user_id)}
		// );
		// console.log(user);



		// const userProj = user[0].projects;
		// console.log(userProj);

		// const newProjectArray = userProj.map((userProj) =>
		// 	projectArray.filter((project) => project.project_id === userProj)
		// );

		// console.log(newProjectArray);
		// setProjects(newProjectArray);
		// console.log(projects);

		//once I'm using the API, the projects need to be sorted in setProjects function within curly braces
		/*	//.then((res) => setProjects(res.data))
			.catch((err) => {
				console.log(err);
			});*/
	
	return (
		<div>
			<Navbar2 />
			{/* <h5 className="pageTitle text-center pt-5">My Profile</h5>
			<div className="container-fluid">
				<div className="row d-flex">
					<div className="col-sm-7">
						<table class="table">
							<thead>
								<tr>
									<th scope="col">Project Number</th>
									<th scope="col">Project Name</th>
                  <th scope="col">Project Language</th>
									<th scope="col">Project Link</th>
                  <th scope="col">Submit Completed Project</th>
									
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
                  <td></td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div> */}
			<h5 className="pageTitle text-center pt-5">My Profile</h5>
			<div className="container-fluid">
				<div className="row d-flex justify-content-around"></div>
			</div>

			<Chart />
		</div>
	);
};

export default Profile;
