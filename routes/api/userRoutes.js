const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
.post(userController.create);
//create a new user for sign-up
  

  //find an existing user to log in
  router.route("/login")
  .post(userController.findOne);

  //log out an existing user
  router.route("/logout")
  .post(userController.destroy);

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