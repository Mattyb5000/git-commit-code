const router = require("express").Router();
const projectRoutes = require("./api/projectRoutes");
const userRoutes = require("./api/userRoutes");

// project routes
router.use("/api/project", projectRoutes);

//user routes
router.use("/api/user", userRoutes)

module.exports = router;