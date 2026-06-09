const { Router } = require("express");
const {
  findAll,
  createUser,
  findOne,
  deleteUser,
  upDateUser,
} = require("../controller/usuario.controller");
const router = Router();

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", createUser);
router.put("/:id", upDateUser);
router.delete("/:id", deleteUser);

module.exports = router;
