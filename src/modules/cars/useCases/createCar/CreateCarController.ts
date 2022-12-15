import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarUseCase } from './CreateCarUseCase';

class CreateCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      description,
      brand,
      daily_rate,
      license_plate,
      category_id,
      fine_amount,
    } = req.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      name,
      description,
      brand,
      daily_rate,
      license_plate,
      category_id,
      fine_amount,
    });

    return res.status(201).json(car);
  }
}

export { CreateCarController };
