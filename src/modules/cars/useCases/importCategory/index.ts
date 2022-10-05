import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesReporitory = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesReporitory)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }