const { Router } = require("express");
const {
  getOnePost,
  getAllPosts,
  createPost,
  upDatePost,
  deletePost,
} = require("../controller/publicacion.controller");
const router = Router();

router.get("/", getAllPosts);
router.get("/:id", getOnePost);
router.post("/", createPost);
router.put("/:id", upDatePost);
router.delete("/:id", deletePost);

module.exports = router;
