import { Request, Response } from 'express';

import { ListCategoriesUseCases } from './ListCategoriesUseCases';

class ListCategoriesController {
  constructor(private listCategoriesUseCases: ListCategoriesUseCases) {}

  handle(req: Request, res: Response): Response {
    const all = this.listCategoriesUseCases.execute();

    return res.json(all);
  }
}

export { ListCategoriesController };
