const router = require("express").Router();
const projectRoutes = require("./projects");

// project routes
router.use("/projects", projectRoutes);

module.exports = router;