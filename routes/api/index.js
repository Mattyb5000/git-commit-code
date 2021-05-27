const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const projectRoutes = require("./projects");

// Book routes
router.use("/users", userRoutes);

// Google Routes
router.use("/projects", projectRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
