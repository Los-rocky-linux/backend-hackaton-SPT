const catchControllerAsync = require("../utils/catch-controller-async");
const { appResponse } = require("../utils/app-response");
module.exports = class BaseController {
  constructor(service) {
    this.service = service;
  }
  getOne = catchControllerAsync(async (req, res) => {
    const { id } = req.params;
    const result = await this.service.getOne(id);
    appResponse(res, result);
  });
  getAll = catchControllerAsync(async (req, res) => {
    const { page, limit } = req.query;
    const result = await this.service.getAll(limit, page);
    appResponse(res, result);
  });
  create = catchControllerAsync(async (req, res) => {
    const { body } = req;
    const result = await this.service.create(body);
    appResponse(res, result);
  });
  update = catchControllerAsync(async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const result = await this.service.update(id, body);
    appResponse(res, result);
  });
  delete = catchControllerAsync(async (req, res) => {
    const { id } = req.params;
    const result = await this.service.delete(id);
    appResponse(res, result);
  });
};
