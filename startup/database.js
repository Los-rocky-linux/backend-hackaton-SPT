// database.js
const { Sequelize } = require("sequelize");
let _server = null;

class Database {
  constructor({ server, sequelize }) {
    // Cambia Server a server
    _server = server; // Cambia Server a server
    this.sequelize = sequelize;
  }

  connect() {
    return this.sequelize
      .authenticate()
      .then(() => {
        console.log("Conectando a PostgreSQL con Supabase");
        // Elimina la llamada a _server.start()
      })
      .catch((err) => {
        console.error("Error al conectar a PostgreSQL con Supabase:", err);
      });
  }
}

module.exports = Database;
