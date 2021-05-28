const router = require("express").Router();
const projectsFormController = require("../../controllers/projectFormController");

// Matches with "/api/projects"
router.route("/")
  .get(projectsFormController.find)
  .post(projectsFormController.create);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(projectsFormController.findById)
  .put(projectsFormController.update)
  .delete(projectsFormController.remove);

module.exports = router;