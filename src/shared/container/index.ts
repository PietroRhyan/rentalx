import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ICategoriesRepositories } from '@modules/cars/repositories/ICategoriesRepository';
import { ISpecifiationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecifiationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
