import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRentalUseCase } from './CreateRentalUseCase';

class CreateRentalController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { car_id, expected_return_date } = req.body;
    const { id } = req.user;

    const createRentalController = container.resolve(CreateRentalUseCase);

    const rental = await createRentalController.execute({
      car_id,
      user_id: id,
      expected_return_date,
    });

    return res.status(201).json(rental);
  }
}

export { CreateRentalController };
