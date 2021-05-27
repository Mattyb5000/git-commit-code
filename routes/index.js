const router = require("express").Router();
const projectRoutes = require("./api/projectRoutes");

// project routes
router.use("/api/projects", projectRoutes);

module.exports = router;