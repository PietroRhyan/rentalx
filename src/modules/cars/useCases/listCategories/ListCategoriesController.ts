import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCases } from './ListCategoriesUseCases';

class ListCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoriesUseCases = container.resolve(ListCategoriesUseCases);

    const all = await listCategoriesUseCases.execute();

    return res.json(all);
  }
}

export { ListCategoriesController };
