const path = require("path");
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const projectformRoutes = require("./projectformRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/projectForms", projectformRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
