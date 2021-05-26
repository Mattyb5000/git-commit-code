const router = require("express").Router();
const projectRoutes = require("./projectRoutes");
const userRoutes = require("./userRoutes");

// project routes
router.use("/projects", projectRoutes);

//user routes
router.use("/user", userRoutes)

module.exports = router;