const Usuario = require('../models/usuarioModel');

const indexApp = (req, res) => {
  console.log("Ruta de inicio")
  res.render('index');
}

const infoApp = async (req, res) => {
  const data = await Usuario.find();

  res.render('info', { usuarios: data });
}

const envioDatos = (req, res) => {
  const {
    nombre,
    edad
  } = req.body;

  // Guardar el usuario en la base de datos
  const nuevoUsuario = new Usuario({
    nombre: nombre,
    edad: edad
  });
  
  nuevoUsuario.save()
    .then(async () => {
      console.log("Usuario guardado en la base de datos");

      const data = await Usuario.find();

      res.render('info', { usuarios: data });
    })
    .catch((err) => {
      console.error("Error al guardar el usuario en la base de datos:", err);
    });
}

module.exports = {
  indexApp,
  infoApp,
  envioDatos
}