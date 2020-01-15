const express = require("express");
const userController = require("./controllers/UsersController");
const authentificationController = require("./controllers/AuthentificationController");
const authentificationMiddleware = require("./middlewares/authentification");

const router = express.Router();

router.use("/users", authentificationMiddleware);

router.get("/users",authentificationMiddleware);

router.get("/users",userController.index);
router.post("/users",userController.create);
router.get("/users/:id",userController.show);
router.put("/user/:id",userController.update);
router.delete("user/:id",userController.delete);

module.exports = router;