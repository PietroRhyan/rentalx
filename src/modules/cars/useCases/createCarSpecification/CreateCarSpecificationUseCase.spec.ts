import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationsUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationsUseCase(carsRepositoryInMemory);
  });

  it('should be able to add a new specification to the car', async () => {
    const car_id = '123';
    const specifications_id = ['54321'];

    await createCarSpecificationUseCase.execute({
      car_id,
      specifications_id,
    });
  });

  it('should not be able to add a new specification to a non-existent car', async () => {
    expect(async () => {
      const car_id = '123';
      const specifications_id = ['54321'];

      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
