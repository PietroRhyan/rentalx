"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCategoriesController = void 0;
var _tsyringe = require("tsyringe");
var _ListCategoriesUseCases = require("./ListCategoriesUseCases");
class ListCategoriesController {
  async handle(req, res) {
    const listCategoriesUseCases = _tsyringe.container.resolve(_ListCategoriesUseCases.ListCategoriesUseCases);
    const all = await listCategoriesUseCases.execute();
    return res.json(all);
  }
}
exports.ListCategoriesController = ListCategoriesController;