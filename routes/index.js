// routes/index.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

module.exports = function ({ ExampleRoutes }) {
  const router = express.Router();
  const apiRouter = express.Router();

  router.use(cors());

  router
    .use(express.json())
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }));

  router.use("/version", (req, res) => {
    res.send("v.0.1.0.3");
  });

  apiRouter.use("/example", ExampleRoutes);

  router.use("/v1/api", apiRouter);

  return router;
};
