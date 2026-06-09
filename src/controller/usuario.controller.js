const { Usuarios } = require("../db/models");

const findAll = async (_, res) => {
  try {
    const data = await Usuarios.findAll({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Usuarios.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const { nickName, email, password } = req.body;
    const nuevoUsuario = await Usuarios.create({ nickName, email, password });
    res.status(200).json("usuario creado");
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
};
const upDateUser = async (req, res) => {
  try {
    const { id } = req.params;

    /////// del middleware///////////////////////
    const usuarioExistente = await Usuarios.findByPk(id);

    if (!usuarioExistente) {
      return res
        .status(404)
        .json({ ok: false, error: "Usuario no encontrado" });
    }

    ///////////////////////////
    await usuarioExistente.update(req.body);

    res.status(200).json("Usuario actualizado");
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const usuarioBorrado = await Usuarios.destroy({
      where: {
        id,
      },
    });

    res
      .status(200)
      .json(`Usuario ${usuarioBorrado > 0 ? "borrado" : "no encontrado"}`);
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

module.exports = { findAll, createUser, findOne, upDateUser, deleteUser };
