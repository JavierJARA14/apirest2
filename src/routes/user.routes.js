const Router = require('express');
const controller = require("../controllers/users.controllers");

const router = Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.addUser);
router.put("/:id", controller.updateUser);

module.exports = router;