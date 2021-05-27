import React from "react";
import "./style.css";

function ProjectCard(props) {
	const { project_id, projectName, link, image } = props;

	return (
		<div className="col-sm-4 d-flex justify-content-center">
			<div className="card mt-5 mb-5">
				<div className="card-body">
					{/* project name */}
					<div className="card-header cardHeader">
						<h5 className="projectTitle">
							<strong>{projectName}</strong>
						</h5>
					</div>
				</div>
				{/* image */}
				<img className="card-img-top" src={image} alt="Card image cap" />
				<ul className="list-group list-group-flush linkSpace">
					<li className="list-group-item">
						<a
							href={link}
							className="card-link"
							target="blank"
							rel="noopener noreferrer"
						>
							Click here for link
						</a>
					</li>
					<li className="list-group-item">
						<button type="button" id={project_id} className="btn btn-secondary selectProjectBut">
							Select Project
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

// function ProjectCard({ icon, title, children }) {
// 	return (
// 		<div className="card mt-4">
// 			{/* project name */}
// 			<div className="card-header">
// 				<h3>
// 					<strong>{projectName}</strong>
// 				</h3>
// 			</div>
// 			{/* image */}
// 			<img className="card-img-top" src={image} alt="Card image cap" />
// 			<a href="{link}" class="card-link">Click here for link</a>
// 		</div>
// 	);
// }

export default ProjectCard;
