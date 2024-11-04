// routes/api/v1.example.js
const { Router } = require("express");

module.exports = function ({ ExampleController }) {
  const router = Router();

  router.get("/get-all", ExampleController.getAll);
  router.get("/get-one/:id", ExampleController.getOne);
  router.post("/create", ExampleController.create);
  router.put("/update/:id", ExampleController.update);
  router.delete("/delete/:id", ExampleController.delete);

  return router;
};
