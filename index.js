// Seteamos el puerto
const port = 3000;

// Importamos el servidor
const server = require('./app');

// Conectamos a la base de datos local
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/practico10-luis-rodriguez')
.then(() => {
  console.log('Conectado a la base de datos');
})
.catch(err => {
  console.error('Error al conectar a la base de datos:', err);
});

// Iniciamos el servidor
server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
