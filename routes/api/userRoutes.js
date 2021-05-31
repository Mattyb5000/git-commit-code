const router = require("express").Router();
const { response } = require("express");
const userController = require("../../controllers/userController");
const User = require("../../models/user");

// Matches with "/api/user"
// router.route("/").post(userController.create);

// router.post("/", function(req, res){
//     res.send("ayyyyeeeee")
//   });

router.post("/", async (req, res) => {
  console.log(req.body);
  console.log("you're in api user / to create a post");

  try {
    const userData = await User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    });

    req.session.save(() => {
     
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
















//create a new user for sign-up

// router.route("/get-users").get(userController.find);

// router.route("/new-project").put(userController.update);

// //find an existing user to log in
// router.route("/login").post(userController.findOne);

// //log out an existing user
// router.route("/logout").post(userController.destroy);


module.exports = router;

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
