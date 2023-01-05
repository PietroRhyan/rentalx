"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListAvailableCarController = void 0;
var _tsyringe = require("tsyringe");
var _ListAvailableCarsUseCase = require("./ListAvailableCarsUseCase");
class ListAvailableCarController {
  async handle(req, res) {
    const {
      brand,
      name,
      category_id
    } = req.body;
    const listAvailableCarsUseCase = _tsyringe.container.resolve(_ListAvailableCarsUseCase.ListAvailableCarsUseCase);
    const cars = await listAvailableCarsUseCase.execute({
      brand: brand,
      name: name,
      category_id: category_id
    });
    return res.json(cars);
  }
}
exports.ListAvailableCarController = ListAvailableCarController;