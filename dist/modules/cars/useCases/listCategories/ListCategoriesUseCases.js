"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCategoriesUseCases = void 0;
var _tsyringe = require("tsyringe");
var _ICategoriesRepository = require("@modules/cars/repositories/ICategoriesRepository");
var _dec, _dec2, _dec3, _dec4, _class;
let ListCategoriesUseCases = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CategoriesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICategoriesRepository.ICategoriesRepositories === "undefined" ? Object : _ICategoriesRepository.ICategoriesRepositories]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListCategoriesUseCases {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute() {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}) || _class) || _class) || _class) || _class);
exports.ListCategoriesUseCases = ListCategoriesUseCases;