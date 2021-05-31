const router = require("express").Router();
const { response } = require("express");
const userController = require("../../controllers/userController");
const User = require("../../models/user.js");

//login route
router.route("/login").post(userController.create);

//route to find 1 user
router.route("/get-user").get(userController.find);

//route to update and add a new project in progress
router.route("/new-project").put(userController.update);

//route to update & add a completed project
router.route("/completed-project").put(userController.updateCompletedProject);

//route to remove project in progress
// router.route("/remove").post(userController.destroyProjectInProgress);


module.exports = router;

// router.post("/", async (req, res) => {
//   console.log(req.body);
//   console.log("you're in api user / to create a post");

//   try {
//     const userData = await User.create({
//       email: req.body.email,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       password: req.body.password,
//     });

//     req.session.save(() => {
     
//       req.session.user_id = userData.user_id;
//       req.session.loggedIn = true;

//       res.status(200).json(userData);
//       console.log("You made it through the sign-in user route");
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
//   }
// });

// .post("/login", ({body}, res) => {
//   const user = new User(body);
//   user.setFullName();
//   user.lastUpdatedDate();

//   User.create(user)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// router
//   .route("/")
//   .get(userController.findAll);

//   router.post("/submit", ({body}, res) => {
//     const user = new User(body);
//     user.setFullName();
//     user.lastUpdatedDate();

//     User.create(user)
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
