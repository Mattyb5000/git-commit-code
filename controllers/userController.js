const db = require("../models");
const { findOne } = require("../models/project");
const { find } = require("../models/project");

//create a new user
module.exports = {
	create: function (req, res) {
		db.User.create(req.body)

			.then((dbUser) => res.json(dbUser))
			//does req.session code go here?
			.catch((err) => res.status(422).json(err));
	},

	find: async function (req, res) {
		db.User.find({ _id: "60b4fb51c17d9458040aba7b" })
			.populate("projectsInProgress")
			.then((dbUser) => res.json(dbUser))
			.catch((err) => res.status(422).json(err));
	},

	update: async function (req, res) {
		db.User.findOneAndUpdate(
			//
			{ _id: "60b4fb51c17d9458040aba7b" },
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
		debugger;
		console.log(req.body.id);
		db.User.findOneAndUpdate(
			
			{ _id: "60b4fb51c17d9458040aba7b" },
			{ $push: { projectsComplete: req.body.id } },
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

	
	findById: async function (id) {
		alert("you are in api findById user route");
		db.User.findOne({
			where: {
				_id: id

			},
		});
	},

	//find an existing user
	findOne: async function (req, res) {
		alert("you are in api findOne user route");
		db.User.findOne({
			where: {
				email: req.body.email,
			},
		});

		const validPassword = await userData.checkPassword(req.body.password);

		if (!validPassword) {
			res
				.status(400)
				.json({ message: "Incorrect email or password. Please try again!" });
			return;
		}
		//does this go here?
		req.session
			.save(() => {
				console.log("Im in req.session.save");
				req.session.user_id = userData.user_id;
				req.session.loggedIn = true;
				console.log(userData.user_id);
				console.log(req.session.user_id);
				res.json({ user: userData, message: "You are now logged in!" });
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
