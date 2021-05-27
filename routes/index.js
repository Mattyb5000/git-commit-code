const router = require("express").Router();
const path = require("path");
const projectRoutes = require("./projectRoutes");
// const userRoutes = require("./userRoutes");
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// project routes
// router.use("/projects", projectRoutes);

//user routes
// router.use("/user", userRoutes)

//

module.exports = router;