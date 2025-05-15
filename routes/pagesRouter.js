// Importamos el router de express
const express = require('express');

// Creamos el router
const router = express.Router();

// Importamos el controlador
const { indexApp, infoApp, envioDatos } = require('../controllers/pagesController');

// Definimos las rutas
router.get('/', indexApp);
router.post("/submit", envioDatos);
router.get('/info', infoApp);

// Exportamos el router
module.exports = router;