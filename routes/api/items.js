const router = require("express").Router();
const controller = require('../../controller/IcharusController');

// call users in DB
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// find user by id
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;

