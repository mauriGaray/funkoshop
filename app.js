const express = require("express");
const app = express();
require("dotenv").config();
const mainRoutes = require("./src/router/mainRoutes.js");
const adminRoutes = require("./src/router/adminRoutes.js");
const shopRoutes = require("./src/router/shopRoutes.js");
const authRoutes = require("./src/router/authRoutes.js");
const methodOverride = require("method-override"); // middleware para poder usar  módulos externos
const path = require("path");
const PORT = process.env.PORT || 3000;

//configuración de express
app.use(express.json()); // express.algo es un middleware nativo
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// habilita el uso de otros métodos HTTP como PUT y DELETE
app.use(express.static("public"));
app.use(express.static(path.resolve(__dirname, "public")));
app.set("view engine", "ejs"); // setea el motor de vistas a EJS
app.set("views", path.join(__dirname, "./src/views")); // setea el directorio de vistas a la carpeta views
//path cambia las barras dependiendo del sistema operativo
//__dirname es una variable global que devuelve la ruta del directorio actual

//rutas
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use((req, res, next) => {
  res
    .status(404)
    .send(
      `<h1>Recurso no encontrado, <a href='/'>regresar a página principal</a></h1>`
    );
});

//servidor

app.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`));
