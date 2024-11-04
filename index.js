// index.js
const container = require("./config/container");


// Resuelve las dependencias necesarias
const server = container.resolve("server");
const database = container.resolve("database");


// Inicia la conexión a la base de datos y el servidor
database
  .connect()
  .then(() => {
    server.start();
  })
  .catch((err) => {
    console.error("Error al iniciar la aplicación:", err);
  });
