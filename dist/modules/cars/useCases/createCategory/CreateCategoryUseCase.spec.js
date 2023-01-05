"use strict";

var _CategoriesRepositoryInMemory = require("@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory");
var _AppError = require("@shared/errors/AppError");
var _CreateCategoryUseCase = require("./CreateCategoryUseCase");
let createCategory;
let categoriesRepositoryInMemory;
describe('Create Catgeory', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new _CategoriesRepositoryInMemory.CategoriesRepositoryInMemory();
    createCategory = new _CreateCategoryUseCase.CreateCategoryUseCase(categoriesRepositoryInMemory);
  });
  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category description test'
    };
    await createCategory.execute({
      name: category.name,
      description: category.description
    });
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
    expect(categoryCreated).toHaveProperty('id');
  });
  it('should not be able to create a new category with an existent name', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category description test'
    };
    await createCategory.execute({
      name: category.name,
      description: category.description
    });
    await expect(createCategory.execute({
      name: category.name,
      description: category.description
    })).rejects.toEqual(new _AppError.AppError('Category Already Exists!'));
  });
});