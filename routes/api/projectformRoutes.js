const router = require("express").Router();
const projectFormController = require("../../controllers/projectFormController");

// Matches with "/api/projects"
router.route("/")
  .get(projectFormController.find)
  .post(projectFormController.create);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(projectFormController.findById)
  .put(projectFormController.update)
  .delete(projectFormController.remove);

module.exports = router;