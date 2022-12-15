import { getRepository, Repository } from 'typeorm';

import { ICreateCarsDTO } from '@modules/cars/dtos/ICreateCarsDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name, description, brand, daily_rate, license_plate, category_id, fine_amount,
  }: ICreateCarsDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      brand,
      daily_rate,
      license_plate,
      category_id,
      fine_amount,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne(
      license_plate,
    );

    return car;
  }
}

export { CarsRepository };
