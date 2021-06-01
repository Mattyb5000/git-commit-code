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
	
	useEffect(() => {
		loadUserProjects();
	}, []);

	const loadUserProjects = () => {
		API.getUser()
			.then((res) => {
				var userProjectsArray = res.data[0].projectsInProgress;
				setUserProjects(userProjectsArray);
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
		//export title to Form
		var projectId = state.selectedRows[0]._id;
		var projectTitle = state.selectedRows[0].title;
		var project = state.selectedRows[0];
		setClickedProjects({...project});
		
		//remove project from user's projects in progress
	};

	return (
		<div className="brick_background">
			<Navbar2 />
			<div className="container-fluid pageTitle">
				<h5 className="pageTitle text-center pt-5">My Profile</h5>
			</div>
			<div className="container-fluid">
				<div className="row table">
				<div className="col-9 ">
					<DataTable
						// className="table-bordered  projectTable w-100 table table-dark">
						className="table-bordered projectTable w-100"
						title="Projects In Progress"
						columns={columns}
						data={data}
						selectableRows
						// // Clicked
						onSelectedRowsChange={handleChange}
					/>
					</div>
				</div>

				{/* <div className="col-12, col-md-12"></div> */}
			</div>

			<ProjectForm clickedProj={clickedProjects} />

			<Chart />
		</div>
	);
};

export default Profile;

	