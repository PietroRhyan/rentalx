import { ICreateRentalsDTO } from '../dtos/ICreateRentalsDTO';
import { Rental } from '../infra/typeorm/entities/Rental';

interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>
  findOpenRentalByUser(user_id: string): Promise<Rental>
  create(data: ICreateRentalsDTO): Promise<Rental>
}

export { IRentalsRepository };
