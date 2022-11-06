import { container } from 'tsyringe';

import { ICategoriesRepositories } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecifiationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecifiationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
