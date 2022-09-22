import { ICategoriesRepositories } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepositories){}
  execute({description, name}: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExists) {
      throw new Error("Category Already Exists!")
    }
  
    this.categoriesRepository.create({name, description})
  }
}

export { CreateCategoryService }