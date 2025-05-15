// Configuramos nuestro servidor express
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');

// Importamos las rutas
const routes = require('./routes/pagesRouter');

// Creamos el servidor
const app = express();

// Configuramos el middleware
app.use(morgan("dev")); // loguea las peticiones en la consola
app.use(express.json()); // parsea el body de las peticiones a json
app.use(express.urlencoded({ extended: true })); // parsea el body de las peticiones a json
app.use(express.static(path.join(__dirname, "public"))); // 2v

// Configuramos el motor de plantillas
app.set("view engine", "hbs"); // configuramos el motor de plantillas
app.set("views", path.join(__dirname, "views")); // configuramos la carpeta de vistas
hbs.registerPartials(path.join(__dirname, "views/partials")); // configuramos la carpeta de parciales

// Configuramos las rutas
app.use('/', routes);

// Middleware para errores
// Middleware 404 al final de todas tus rutas
app.use((req, res) => {
  console.log(`Ruta no encontrada: ${req.url}`);
  res.status(404).send("<h1>404 - Página no encontrada</h1>");
});

// Middleware para manejar errores 500
app.use((err, req, res, next) => {
  console.error(err.stack); // Imprime el error en la consola
  res.status(500).send("<h1>500 - Error interno del servidor</h1>");
});

// Exportamos el servidor
module.exports = app;