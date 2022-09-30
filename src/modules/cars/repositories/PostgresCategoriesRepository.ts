import { Category } from '../model/Category'
import { ICategoriesRepositories, ICreateCategoryDTO } from './ICategoriesRepository'

class PostgresCategoriesRepository implements ICategoriesRepositories {
  findByName(name: string): Category {
    console.log(name)
    return null
  }
  list(): Category[] {
    return null
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description)
  }
}

export { PostgresCategoriesRepository }