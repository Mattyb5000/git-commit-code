const db = require("../models");
const { findOne } = require("../models/project");
const { find } = require("../models/project");

//create a new user
module.exports = {
	create: function (req, res) {
		console.log("you are in api create user route");
		db.User.create(req.body)
			.then((dbUser) => res.json(dbUser))
			//does req.session code go here?
			.catch((err) => res.status(422).json(err));
	},

	find: async function (req, res) {
		db.User.find({})
			.populate("projectsInProgress")
			.then(dbUser => res.json(dbUser))
			.catch((err) => res.status(422).json(err));
	},

	update: async function (req, res) {
		console.log(req.body.id);
		db.User.findOneAndUpdate(
			// 
      { _id: "60b13bb7386d264e40cf9c50"},
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

	//find an existing user
	findOne: async function (req, res) {
		console.log("you are in api findOne user route");
		db.User.findOne({
			where: {
				email: req.body.email,
			},
		})
			.then((dbUser) => res.json(dbUser))
			.catch((err) => res.status(422).json(err));
		//is this in the right place?
		const validPassword = await userData.checkPassword(req.body.password);

		if (!validPassword) {
			res
				.status(400)
				.json({ message: "Incorrect email or password. Please try again!" });
			return;
		}
		//does this go here?
		req.session.save(() => {
			console.log("Im in req.session.save");
			req.session.user_id = userData.user_id;
			req.session.loggedIn = true;
			console.log(userData.user_id);
			console.log(req.session.user_id);
			res.json({ user: userData, message: "You are now logged in!" });
		});
		//add catch error here
	},
findOne: async function (req, res) {
  console.log('you are in api findOne user route');
  db.User
    .findOne({
      where: {
        email: req.body.email } })
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
    //is this in the right place?
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
//does this go here?
    req.session.save(() => {
      console.log('Im in req.session.save');
      req.session.user_id = userData.user_id;
      req.session.loggedIn = true;
      console.log(userData.user_id);
      console.log(req.session.user_id);
      res.json({ user: userData, message: 'You are now logged in!' });
    });
    //add catch error here
},
	destroy: function (req, res) {
		console.log("you are in the api logout user route");
		db.User.findById(req.params.id)
			//how to add the if else statement for if req.session.logged_In?
			.then(
				req.session.destroy(() => {
					res.status(204).end();
				})
			)
			.catch((err) => res.status(422).json(err));
	},
};

//   (if (req.session.logged_In) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });
// .catch(err => res.status(422).json(err));

// findAll: function(req, res) {
//   const { query: params } = req;
//   axios

//   //TODO: add MongodbURL for Projects API-ST
//     .get("TODO", {
//       params
//     })
//     .then(results =>
//       results.data.items.filter(
//         result =>
//         //TODO: determine what items we want to display
//       )
//     )
//     .then(apiProjects =>
//       db.Project.find().then(dbProjects =>
//         apiprojects.filter(apiProject =>
//           dbprojects.every(dbProject => dbProject.userId.toString() !== apiProject.id)
//         )
//       )
//     )
//     .then(projects => res.json(projects))
//     .catch(err => res.status(422).json(err));
// }

// const db = require("../models");
// const { findOne } = require("../models/project");
// const { find } = require("../models/project");
// //create a new user
// module.exports = {
// create: function(req, res) {
//   console.log('you are in api create user route');
//   db.User.create(req.body)
//     .then(dbUser => res.json(dbUser))
//     //does req.session code go here?
//     .catch(err => res.status(422).json(err));
// },
// find: async function(req,res) {
//   db.User.find({})
//   .populate('projectsInProgress')
//   .then(dbUser => res.json(dbUser))
//   .catch(err => res.status(422).json(err));
// },
// //find an existing user
// findOne: async function (req, res) {
//   console.log('you are in api findOne user route');
//   db.User
//     .findOne({
//       where: {
//         email: req.body.email } })
//     .then(dbUser => res.json(dbUser))
//     .catch(err => res.status(422).json(err));
//     //is this in the right place?
//     const validPassword = await userData.checkPassword(req.body.password);
//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//       return;
//     }
// //does this go here?
//     req.session.save(() => {
//       console.log('Im in req.session.save');
//       req.session.user_id = userData.user_id;
//       req.session.loggedIn = true;
//       console.log(userData.user_id);
//       console.log(req.session.user_id);
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });
//     //add catch error here
// },
// destroy: function(req, res) {
//   console.log('you are in the api logout user route');
//   db.User.findById(req.params.id)
//   //how to add the if else statement for if req.session.logged_In?
//     .then (req.session.destroy(() => {
//       res.status(204).end();
//     }))
//     .catch (err => res.status(422).json(err));  
// }
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
  // findAll: function(req, res) {
  //   const { query: params } = req;
  //   axios
  //   //TODO: add MongodbURL for Projects API-ST
  //     .get("TODO", {
  //       params
  //     })
  //     .then(results =>
  //       results.data.items.filter(
  //         result =>
  //         //TODO: determine what items we want to display
  //       )
  //     )
  //     .then(apiProjects =>
  //       db.Project.find().then(dbProjects =>
  //         apiprojects.filter(apiProject =>
  //           dbprojects.every(dbProject => dbProject.userId.toString() !== apiProject.id)
  //         )
  //       )
  //     )
  //     .then(projects => res.json(projects))
  //     .catch(err => res.status(422).json(err));
  // }
















