const AppError = require("../utils/app-error");
const catchServiceAsync = require("../utils/catch-service-async");

module.exports = class BaseService {
  constructor(model) {
    this.model = model;
  }

  getOne = catchServiceAsync(async (id) => {
    if (!id) {
      throw new AppError("Id must be sent", 400);
    }
    const currentEntity = await this.model.findByPk(id); // Método de Sequelize
    if (!currentEntity) {
      throw new AppError("Entity not found", 404);
    }
    return { data: currentEntity };
  });

  getAll = catchServiceAsync(async (limit = 10, pageNum = 1) => {
    const offset = limit * (pageNum - 1);
    const { count, rows } = await this.model.findAndCountAll({
      // Método de Sequelize
      limit,
      offset,
    });
    return { data: { data: rows, totalCount: count } };
  });

  create = catchServiceAsync(async (entity) => {
    const data = await this.model.create(entity); // Método de Sequelize
    return { data };
  });

  update = catchServiceAsync(async (id, entity) => {
    if (!id) {
      throw new AppError("Id must be sent", 400);
    }
    const [updated] = await this.model.update(entity, {
      // Método de Sequelize
      where: { id },
    });
    if (!updated) {
      throw new AppError("Entity not found", 404);
    }
    const updatedEntity = await this.model.findByPk(id); // Método de Sequelize
    return { data: updatedEntity };
  });

  delete = catchServiceAsync(async (id) => {
    if (!id) {
      throw new AppError("Id must be sent", 400);
    }
    const deleted = await this.model.destroy({
      // Método de Sequelize
      where: { id },
    });
    if (!deleted) {
      throw new AppError("Entity not found", 404);
    }
    return { data: deleted };
  });
};
