const { Router } = require("express");
const userController = require("../controllers/user");

const router = Router();

// User endpoints
router.post("/api/users", userController.create);
router.get("./api/user/:id", userController.getUserById);

module.exports = router;
