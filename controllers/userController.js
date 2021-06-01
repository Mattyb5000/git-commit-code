const router = require('express').Router();
const db = require("../models");


module.exports = {
	//finds a user to populate projects on profile page
	find: async function (req, res) {
		await db.User.find({ _id: req.session.user_id })
			.populate("projectsInProgress")
			.then((dbUser) => res.json(dbUser))
			.catch((err) => res.status(422).json(err));
	},

	//finds a user and adds a project in progress from the project pages
	update: async function (req, res) {
		db.User.findOneAndUpdate(
			
			{ _id: req.session.user_id },
			{ $push: { projectsInProgress: req.body.id } },
			{ new: true }
		)
			.then((dbProject) => {
				console.log(dbProject);
				res.json(dbProject);
			})
			.catch((err) => {
				console.log(err);
				res.status(422).json(err);
			});
	},

	updateCompletedProject:  function (req, res) {
		db.User.findOneAndUpdate(
			{ _id: req.session.user_id },
			{ $push: { projectsComplete: req.body.id } },
			{ new: true }
			)
			.then((dbProject) => {
				console.log(dbProject);
				res.json(dbProject);
				alert("project added to completed projects");
			})
		
			.catch((err) => {
				console.log(err);
				res.status(422).json(err);
			});
	},

	findById: async function (id) {
		db.User.findOne({
			where: {
				_id: id
			},
		});
	},

	//find an existing user
	// findOne: async function (req, res) {
	// 	alert("you are in api findOne user route");
	// 	db.User.findOne({
	// 		where: {
	// 			email: req.body.email,
	// 		},
	// 	});

	// 	const validPassword = await userData.checkPassword(req.body.password);

	// 	if (!validPassword) {
	// 		res
	// 			.status(400)
	// 			.json({ message: "Incorrect email or password. Please try again!" });
	// 		return;
	// 	}

		//does this go here?
	// 	req.session
	// 		.save(() => {
	// 			console.log("Im in req.session.save");
	// 			req.session.user_id = userData.user_id;
	// 			req.session.loggedIn = true;
	// 			console.log(userData.user_id);
	// 			console.log(req.session.user_id);
	// 			res.json({ user: userData, message: "You are now logged in!" });
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			res.status(422).json(err);
	// 		});
	// },

	destroy: function (req, res) {
		console.log("you are in the api logout user route");
		db.User.findById(req.params.id)
			//how to add the if else statement for if req.session.logged_In?
			.then((user) => {
				if (req.session.logged_In) {
					req.session.destroy(() => {
						res.status(204).end();
					});
				} else {
					res.status(404).end();
				}
			})

			.catch((err) => res.status(422).json(err));
	},
	

	destroyProjectInProgress: function(req, res) {
		db.User.findById(
		{ _id: "60b4fb51c17d9458040aba7b" },
		{ new: true }
		)
		.then((dbProject) => {
			console.log(dbProject);
			res.json(dbProject);
		})
	
		.catch((err) => {
			console.log(err);
			res.status(422).json(err);
		});

},

destroy: function (req, res) {
	console.log("you are in the api logout user route");
	db.User.findById(req.params.id)
		//how to add the if else statement for if req.session.logged_In?
		.then((user) => {
			if (req.session.logged_In) {
				req.session.destroy(() => {
					res.status(204).end();
				});
			} else {
				res.status(404).end();
			}
		})

		.catch((err) => res.status(422).json(err));
},


};

	
	//adds a project in progress to user
	// update: async function (req, res) {
	// 	db.User.findOneAndUpdate(
	// 		//
	// 		{ _id: "60b4fb51c17d9458040aba7b" },
	// 		{ $push: { projectsInProgress: req.body.id } },
	// 		{ new: true }
	// 	)
	// 		.then((dbProject) => {
	// 			console.log(dbProject);
	// 			res.json(dbProject);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			res.status(422).json(err);
	// 		});
	// },

	// updateCompletedProject:  function (req, res) {
	// 	db.User.findOneAndUpdate(


	// router.post('/', async (req, res) => {
	// 	console.log(req.body);
	// 	console.log("you're in api user / to create a post");
	  
	// 	try {
	// 	  const userData = await user.create({
	// 		lastName: req.body.lastName,
	// 		firstName: req.body.firstName,
	// 		email: req.body.email,
	// 		password: req.body.password
	// 	  });
	  
	// 	  req.session.save(() => {
			
	// 		// req.session.user_id = userData.id;
	// 		req.session.user_id = userData.user_id;
	// 		req.session.loggedIn = true;
	  
	// 		res.status(200).json(userData);
	// 		console.log("You made it through the sign-in user route");
	// 	  });
		  
	// 	} catch (err) {
	// 	  console.log(err);
	// 	  res.status(400).json(err);
	// 	}
	// 	//does this go here?
	// 	req.session
	// 		.save(() => {
	// 			console.log("Im in req.session.save");
	// 			req.session.user_id = userData.user_id;
	// 			req.session.loggedIn = true;
	// 			console.log(userData.user_id);
	// 			console.log(req.session.user_id);
	// 			res.json({ user: userData, message: "You are now logged in!" });
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			res.status(422).json(err);
	// 		});
	// },