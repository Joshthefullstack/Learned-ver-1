const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.post("/login", userController.getUser);

module.exports = router;