const router = require("express").Router();
const enrollmentController = require("../controllers/enrollmentController");

router.post("/", enrollmentController.enroll);
// router.get("/:id", enrollmentController.getStudents);

module.exports = router;