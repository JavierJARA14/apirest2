//Importo router de express
const Router = require('express');
//Importo el controlador
const controller = require("../controllers/users.controllers");

//Mando a llamar la funcion en una variable
const router = Router();

//Creo las rutas
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.addUser);
router.put("/:id", controller.updateUser);

//Exporto las rutas
module.exports = router;