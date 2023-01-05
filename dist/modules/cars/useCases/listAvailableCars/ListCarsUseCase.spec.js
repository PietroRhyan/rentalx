"use strict";

var _CarsRepositoryInMemory = require("@modules/cars/repositories/in-memory/CarsRepositoryInMemory");
var _ListAvailableCarsUseCase = require("./ListAvailableCarsUseCase");
let listAvailableCarsUseCase;
let carsRepositoryInMemory;
describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    listAvailableCarsUseCase = new _ListAvailableCarsUseCase.ListAvailableCarsUseCase(carsRepositoryInMemory);
  });
  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 90.00,
      license_plate: 'ABC-1234',
      fine_amount: 100.00,
      brand: 'Car_Brand',
      category_id: 'Category ID'
    });
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });
  it('shloud be able to list all availbale cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 90.00,
      license_plate: 'ABC-1234',
      fine_amount: 100.00,
      brand: 'Car_Brand_test',
      category_id: 'Category ID'
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car_brand_test'
    });
    expect(cars).toEqual([car]);
  });
  it('shloud be able to list all availbale cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Car description',
      daily_rate: 90.00,
      license_plate: 'ABC-1234',
      fine_amount: 100.00,
      brand: 'Car_Brand_test',
      category_id: 'Category ID'
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car3'
    });
    expect(cars).toEqual([car]);
  });
  it('shloud be able to list all availbale cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car4',
      description: 'Car description',
      daily_rate: 90.00,
      license_plate: 'ABC-1234',
      fine_amount: 100.00,
      brand: 'Car_Brand_test',
      category_id: '12345'
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: '12345'
    });
    expect(cars).toEqual([car]);
  });
});