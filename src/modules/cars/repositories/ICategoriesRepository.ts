import { Category } from '@modules/cars/infra/typeorm/entities/Category';

// DTO => Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepositories {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepositories, ICreateCategoryDTO };
