require("dotenv").config();

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const init = require("./init");
const usuarioRoute = require("./routes/usuario.route");
const publicacionRoute = require("./routes/publicacion.route");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/usuarios", usuarioRoute);
app.use("/publicacion", publicacionRoute);

app.listen(PORT, async (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  await init();
  console.log(`App escuchando en http://localhost:${PORT}`);
  console.log(
    `Documentación de la API disponible en http://localhost:${PORT}/api-docs`,
  );
});
