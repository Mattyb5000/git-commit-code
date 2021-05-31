const router = require('express').Router();
const db = require("../models");
// const { findOne } = require("../models/project");
// const { find } = require("../models/project");
const { User } = require("../models/user")

//create a new user
// module.exports = {
//   create: function (req, res) {
//     console.log("you are in api create user route");
//     db.User.create(req.body)
//       .then((dbUser) => res.json(dbUser))
//       //does req.session code go here?
//       .catch((err) => res.status(422).json(err));
//   },

// module.exports = {
  

	router.post('/', async (req, res) => {
		console.log(req.body);
		console.log("you're in api user / to create a post");
	  
		try {
		  const userData = await User.create({
			lastName: req.body.lastName,
			firstName: req.body.firstName,
			email: req.body.email,
			password: req.body.password
		  });
	  
		  req.session.save(() => {
			
			// req.session.user_id = userData.id;
			req.session.user_id = userData.user_id;
			req.session.loggedIn = true;
	  
			res.status(200).json(userData);
			console.log("You made it through the sign-in user route");
		  });
		  
		} catch (err) {
		  console.log(err);
		  res.status(400).json(err);
		}
	  });




	  module.exports = router;



//   find: async function (req, res) {
//     db.User.find({})
//       .populate("projectsInProgress")
//       .then((dbUser) => res.json(dbUser))
//       .catch((err) => res.status(422).json(err));
//   },

//   update: async function (req, res) {
//     console.log(req.body.id);
//     db.User.findOneAndUpdate(
//       //
//       { _id: "60b13bb7386d264e40cf9c50" },
//       { $push: { projectsInProgress: req.body.id } },
//       { new: true }
//     )
//       .then((dbProject) => {
//         console.log(dbProject);
//         res.json(dbProject);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(422).json(err);
//       });
//   },

//   //find an existing user
//   findOne: async function (req, res) {
//     console.log("you are in api findOne user route");
//     db.User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     })
//       .then((dbUser) => res.json(dbUser))
//       .catch((err) => res.status(422).json(err));
//     //is this in the right place?
//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password. Please try again!" });
//       return;
//     }
//     //does this go here?
//     req.session.save(() => {
//       console.log("Im in req.session.save");
//       req.session.user_id = userData.user_id;
//       req.session.loggedIn = true;
//       console.log(userData.user_id);
//       console.log(req.session.user_id);
//       res.json({ user: userData, message: "You are now logged in!" });
//     });
//     //add catch error here
//   },

//   destroy: function (req, res) {
//     console.log("you are in the api logout user route");
//     db.User.findById(req.params.id)
//       //how to add the if else statement for if req.session.logged_In?
//       .then(
//         req.session.destroy(() => {
//           res.status(204).end();
//         })
//       )
//       .catch((err) => res.status(422).json(err));
//   },
// };

//   (if (req.session.logged_In) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });
// .catch(err => res.status(422).json(err));







// 		if (!validPassword) {
// 			res
// 				.status(400)
// 				.json({ message: "Incorrect email or password. Please try again!" });
// 			return;
// 		}
// 		//does this go here?
// 		req.session
// 			.save(() => {
// 				console.log("Im in req.session.save");
// 				req.session.user_id = userData.user_id;
// 				req.session.loggedIn = true;
// 				console.log(userData.user_id);
// 				console.log(req.session.user_id);
// 				res.json({ user: userData, message: "You are now logged in!" });
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 				res.status(422).json(err);
// 			});
// 	},

// 	destroy: function (req, res) {
// 		console.log("you are in the api logout user route");
// 		db.User.findById(req.params.id)
// 			//how to add the if else statement for if req.session.logged_In?
// 			.then((user) => {
// 				if (req.session.logged_In) {
// 					req.session.destroy(() => {
// 						res.status(204).end();
// 					});
// 				} else {
// 					res.status(404).end();
// 				}
// 			})

// 			.catch((err) => res.status(422).json(err));
// 	},
// };
