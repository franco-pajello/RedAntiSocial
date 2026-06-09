const e = require("express");
const usuariosPorDefecto = require("../usuarios.json");

const init = async () => {
  const db = require("./db/models").sequelize;
  const { Usuarios } = require("./db/models");
  await db.sync({ force: true });

  const nuevoUsuario = await Usuarios.bulkCreate(usuariosPorDefecto);
};
module.exports = init;
