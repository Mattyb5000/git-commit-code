const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/").post(userController.create);
//create a new user for sign-up

router.route("/get-user").get(userController.find);

router.route("/user-by-id").get(userController.findById);

router.route("/new-project").put(userController.update);

//find an existing user to log in
router.route("/login").get(userController.findOne);

//log out an existing user
router.route("/logout").post(userController.destroy);


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
