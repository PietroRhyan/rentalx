import { Category } from "../../model/Category"
import { ICategoriesRepositories } from "../../repositories/ICategoriesRepository"

class ListCategoriesUseCases {
  constructor(private categoriesRepository: ICategoriesRepositories){}
  
  execute(): Category[] {
    const categories = this.categoriesRepository.list()

    return categories
  }
}

export { ListCategoriesUseCases }