import { Category } from '@modules/cars/infra/typeorm/entities/Category';

import { ICategoriesRepositories, ICreateCategoryDTO } from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepositories {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = await this.categories.find((category) => category.name === name);
    return category;
  }

  async list(): Promise<Category[]> {
    const all = await this.categories;
    return all;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}

export { CategoriesRepositoryInMemory };