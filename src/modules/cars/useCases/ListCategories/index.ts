import { CategoriesRepository } from "../../Repositories/Categories/CategoriesRepositories"
import { ListCategoriesController } from "./ListCategoriesController"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export { listCategoriesController }