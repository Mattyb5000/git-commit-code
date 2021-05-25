import React from "react";
import './style.css';

function ProjectCard() {
	return (
        <div>
		<div className="card mt-4">
			{/* project name */}
			<div className="card-header">
				<h3>
					<strong>Sample Project</strong>
				</h3>
			</div >
			{/* image */}
			<img className="card-img-top" src="https://i.imgur.com/5vMWZQW.jpeg" alt="Card image cap" />
            <div className="linkSpace">
			<a href="https://amazon.com" class="card-link mt-2" target="blank" rel="noopener noreferrer">Click here for link</a>
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
