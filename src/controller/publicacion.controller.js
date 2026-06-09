const { Publicacion, Imagen } = require("../db/models");

const getAllPosts = async (req, res) => {
  try {
    const data = await Publicacion.findAll({
      include: [
        {
          model: Imagen,
          as: "imagenes",
        },
      ],
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Publicacion.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Imagen,
          as: "imagenes",
        },
      ],
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
const createPost = async (req, res) => {
  try {
    const { usuarioId, descripcion, pathImg } = req.body;
    const nuevaPublicacion = await Publicacion.create({ descripcion });
    const nuevaImg = await Imagen.create({ pathImg });
    await nuevaPublicacion.addImagene(nuevaImg);
    await nuevaPublicacion.setUsuario(usuarioId);

    res.status(201).json("Publicación creada");
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
};
const upDatePost = async (req, res) => {
  try {
    const { id } = req.params;

    /////// del middleware///////////////////////
    const postExistente = await Publicacion.findByPk(id);
    const { pathImg, usuarioId, descripcion } = req.body;

    if (!postExistente) {
      return res
        .status(404)
        .json({ ok: false, error: "la publicacion no existe" });
    }

    ///////////////////////////
    await postExistente.update({ pathImg, usuarioId, descripcion });
    if (!pathImg) {
      await Imagen.destroy({
        where: { publicacionId: id },
      });
    }
    res.status(200).json("publicacion actualizada");
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const postBorrada = await Publicacion.destroy({
      where: {
        id,
      },
    });

    res
      .status(200)
      .json(`Publicacion ${postBorrada > 0 ? "borrada" : "no existe"}`);
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

module.exports = {
  getOnePost,
  getAllPosts,
  createPost,
  upDatePost,
  deletePost,
};
