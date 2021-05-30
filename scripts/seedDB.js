const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Project collection and inserts the projects below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gitcommit_db");

const projectSeed = [
	{
		language: "Javascript",
		title: "JavaScript Clock",
		link: "https://codepen.io/codifiedconcepts/pen/bwgxRq",
		image: "https://i.imgur.com/5vMWZQW.jpeg",
	},
	{
		language: "Javascript",
		title: "JavaScript Tip Calculator",
		link: "https://skillcrush.com/blog/projects-you-can-do-with-javascript/",
		image: "https://i.imgur.com/5vMWZQW.jpeg",
	},
	{
		language: "Javascript",
		title: "JavaScript Map",
		link: "https://codepen.io/aomyers/pen/LWOwpR",
		image: "https://i.imgur.com/5vMWZQW.jpeg",
	},
	{
		language: "Javascript",
		title: "JavaScript Login Authentication",
		link: "https://codepen.io/MikeTran/pen/zGLKwj?page=2",
		image: "https://i.imgur.com/5vMWZQW.jpeg",
	},
	{
		language: "Javascript",
		title: "JavaScript Quiz",
		link: "https://www.sitepoint.com/simple-javascript-quiz/",
		image: "https://i.imgur.com/5vMWZQW.jpeg",
	},
	{
		language: "Javascript",
		title: "JavaScript To-Do List",
		link: "https://codepen.io/JohnPaulFich/pen/MXmzzM",
		image: "https://i.imgur.com/5vMWZQW.jpeg",
	},
	{
		language: "React",
		title: "React To Do App",
		link: "https://codecanyon.net/item/todo-list-react-js/30149679?irgwc=1&clickid=XkSyY8Ty7xyLWipwUx0Mo3YrUkB29e0OuXTWyI0&iradid=275988&irpid=2490362&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_2490362&utm_medium=affiliate&utm_source=impact_radius",
		image: "https://i.imgur.com/bEdgven.jpg",
	},
	{
		language: "React",
		title: "React Currency Converter",
		link: "https://codepen.io/jmean/pen/Oxmgxp",
		image: "https://i.imgur.com/bEdgven.jpg",
	},
	{
		language: "React",
		title: "React Search and Filter",
		link: "https://codepen.io/mtclmn/pen/QyPVJp",
		image: "https://i.imgur.com/bEdgven.jpg",
	},
	{
		language: "React",
		title: "React Movie Database",
		link: "https://www.freecodecamp.org/news/learn-react-in-1-hour-by-building-a-movie-search-app/",
		image: "https://i.imgur.com/bEdgven.jpg",
	},
	{
		title: "Rat in a Maze",
		link: "https://www.crio.do/projects/react-ratinamaze/",
		image: "https://i.imgur.com/bEdgven.jpg",
	},
	{
		language: "React",
		title: "React Social Card",
		link: "https://codepen.io/leoraw/pen/ZjvRpL",
		image: "https://i.imgur.com/bEdgven.jpg",
	},

	{
		language: "Algorithm",
		title: "Linked Lists",
		link: "https://www.geeksforgeeks.org/compare-two-strings-represented-as-linked-lists/",
		image:
			"https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
	},
	{
		language: "Algorithm",
		title: "Reverse Linked List",
		link: "https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/",
		image:
			"https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
	},
	{
		language: "Algorithm",
		title: "Detect & Remove",
		link: "https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/",
		image:
			"https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
	},
	{
		language: "Algorithm",
		title: "Merge Sort",
		link: "https://www.geeksforgeeks.org/merge-sort-for-linked-list/",
		image:
			"https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
	},
	{
		language: "Algorithm",
		title: "Longest Increasing Subsequence",
		link: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
		image:
			"https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
	},
	{
		language: "Algorithm",
		title: "Binary Search",
		link: "https://www.geeksforgeeks.org/binary-search/",
		image:
			"https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
	},
];

const userSeed = [
	{
		firstName: "Big",
		lastName: "Bird",
		password: "123123",
		email: "bigBird@gmail.com",
		projectsInProgress: [],
		projectsCompleted: [],
	},
	{
		firstName: "Myrtle",
		lastName: "Emerson",
		password: "123123",
		email: "myrtle@hotmail.com",
		projectsInProgress: [],
		projectsCompleted: [],
	},
	{
		firstName: "Bob",
		lastName: "Ross",
		password: "123123",
		email: "everyonelovesme@gmail.com",
		projectsInProgress: [],
		projectsCompleted: [],
	},
];

const projectFormSeed = [
	{
		projectname: "Algorithm Binary Search",
		username: "Bird",
		url: "github/bigbird.com",
		projectsInProgress: [],
		projectsCompleted: [],
	},
];

const seedIt = () => {
	db.Project.deleteMany({})
		.then(() => db.Project.collection.insertMany(projectSeed))
		.then((data) => {
			console.log(data.result.n + " Hell yeah! We did it! Liz rocks!");
			db.Project.find().then((data) => {
				userSeed[0].projectsInProgress.push(data[2]._id, data[4]._id);
				userSeed[0].projectsCompleted.push(data[8]._id, data[14]._id);
				userSeed[1].projectsInProgress.push(data[3]._id);
				userSeed[1].projectsCompleted.push(data[1]._id);
				userSeed[2].projectsInProgress.push(data[5]._id, data[6]._id);
				userSeed[2].projectsCompleted.push(data[2]._id, data[3]._id);

			db.User.deleteMany({})
				.then(() => db.User.collection.insertMany(userSeed))

				.then((data) => {
						console.log(" User data posted!");
						// process.exit(0);
				});

				db.ProjectForm.deleteMany({})
  					.then(() => db.ProjectForm.collection.insertMany(projectFormSeed))
  				.then((data) => {
    			console.log("projectForm data inserted!");
    			// process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
				
			});

			//process.exit(0);
		})
		.catch((err) => {
			console.error(err);
			process.exit(1);
		});
};

seedIt();
