const router = require("express").Router();
const projectRoutes = require("./api/projectRoutes");
const userRoutes = require("./userRoutes");

// project routes
router.use("/api/projects", projectRoutes);

//user routes
router.use("/user", userRoutes)

module.exports = router;