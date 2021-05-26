import React from "react";
import "./style.css";

function ProjectCard(props) {
	const { projectName, link, image } = props;

	return (
		<div>
			<div className="card mt-5">
				{/* project name */}
				<div className="card-header cardHeader">
					<h5 className="projectTitle">
						<strong>{projectName}</strong>
					</h5>
				</div>
				{/* image */}
				<img className="card-img-top" src={image} alt="Card image cap" />
				<div className="linkSpace">
					<a
						href={link}
						className="card-link"
						target="blank"
						rel="noopener noreferrer"
					>
						Click here for link
					</a>
				</div>
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
