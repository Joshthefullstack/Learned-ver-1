const router = require("express").Router();
const lessonController = require("../controllers/lessonController");

router.post("/", lessonController.createLesson);
router.get("/", lessonController.getLessons);
router.get("/:id", lessonController.getLesson);
router.put("/:id", lessonController.updateLesson);
router.delete("/:id", lessonController.deleteLesson);

module.exports = router;