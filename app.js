const express = require("express");
const app = express();
require("dotenv").config();
const mainRoute = require("./src/router/mainRoute.js");
const override = require("method-override"); // middleware para poder usar  módulos externos
const path = require("path");
const PORT = process.env.PORT || 3000;

//configuración de express
app.use(express.json()); // express.algo es un middleware nativo
app.use(express.urlencoded({ extended: true }));
app.use(override("_method")); // habilita el uso de otros métodos HTTP como PUT y DELETE
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs"); // setea el motor de vistas a EJS
app.set("views", path.join(__dirname, "./src/views")); // setea el directorio de vistas a la carpeta views
//path cambia las barras dependiendo del sistema operativo
//__dirname es una variable global que devuelve la ruta del directorio actual

//rutas
app.use("/", mainRoute);

app.use((req, res, next) => {
  res
    .status(404)
    .send(
      `<h1>Recurso no encontrado, <a href='/'>regresar a página principal</a></h1>`
    );
});

//servidor

app.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`));
