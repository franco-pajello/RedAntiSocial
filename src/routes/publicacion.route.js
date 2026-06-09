const { Router } = require("express");
const { createPost } = require("../controller/publicacion.controller");
const router = Router();

router.post("/", createPost);

module.exports = router;
