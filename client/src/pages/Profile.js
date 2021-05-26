import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
import ProjectCard from "../components/ProjectCard/index.js";
import FakeAPI from "../utils/FakeAPI";
import FakeUserAPI from "../utils/FakeUserAPI";

const Profile = () => {
	const [userProjects, setUserProjects] = useState([]);
  const [projects, setProjects] = useState([]);

	// loads all projects and sets them to projects
	useEffect(() => {
		loadUserProjects();
	}, []);
 

	function loadUserProjects() {

    const projectArray = FakeAPI.getProjects();
    console.log(projectArray);
    // setProjects(projectArray);
    // console.log(projects);

		const tempUserArray = FakeUserAPI.getUserProjects();
    console.log(tempUserArray);
		const user = tempUserArray.filter(
			(user) => user.user_id === 1
      // {(req.session.user_id)}
		);
    
		console.log(user[0]);
    const userProj = user[0].projects;
    console.log(userProj);

    const newProjectArray = [];
    
    const userProjArr = userProj.forEach(project_id => {
      console.log(projectArray);
      for (i=0; i < projectArray; i++) {
       if(projectArray[i].project_id = project_id) {
         newProjectArray.push(projectArray[i]);

       }}})
        //  projectArray.filter((
        // (selectedUserProjects) => selectedUserProjects.project_id === (project_id)
      
      
   
    console.log(userProjArr);
    
    
    // const userProj = user.projects.map(project => (
    //   for (i=0; i < userProj.length; i++) {

    // }...userProj
    // ) );

    // console.log(userProj);
		//sort data in that variable array
		// pass sorted array to setProjects function
		// setUserProjects(userProj);
		//once I'm using the API, the projects need to be sorted in setProjects function within curly braces
		/*	//.then((res) => setProjects(res.data))
			.catch((err) => {
				console.log(err);
			});*/
	}
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
		</div>
	);
};

export default Profile;
