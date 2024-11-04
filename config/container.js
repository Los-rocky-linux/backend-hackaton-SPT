// config/container.js
const { createContainer, asClass, asValue, asFunction } = require("awilix");
const { Sequelize } = require("sequelize");

// Config
const config = require(".");

// Routes
const Routes = require("../routes");

// Services
const { ExampleService } = require("../services");

// Controllers
const { ExampleController } = require("../controllers");

// Startup
const { Database, Server } = require("../startup");

// Routes
const { ExampleRoutes } = require("../routes/api/index");

// Models
const { Example } = require("../models");

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DB_URL);

const container = createContainer();

container
  .register({
    // Configuración principal
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    server: asClass(Server).singleton(),
    database: asClass(Database).singleton(),
    sequelize: asValue(sequelize), // Registra sequelize
  })
  // Configuración de los servicios
  .register({
    ExampleService: asClass(ExampleService).singleton(),
  })
  // Configuración de los controladores
  .register({
    ExampleController: asClass(ExampleController).singleton(),
  })
  // Configuración de las rutas
  .register({
    ExampleRoutes: asFunction(ExampleRoutes).singleton(),
  })
  // Configuración de los modelos
  .register({
    Example: asValue(Example),
  });


module.exports = container;
