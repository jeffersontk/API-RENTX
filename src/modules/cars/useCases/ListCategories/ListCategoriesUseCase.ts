import { Category } from "../../model/Category";
import { ICategoriesRepositories } from "../../Repositories/Categories/ICategoriesRepositories";

class ListCategoriesUseCase {
  constructor(private categoriesRepositories: ICategoriesRepositories) {}

  execute(): Category[] {
    const categories = this.categoriesRepositories.list()

    return categories
  }
}

export { ListCategoriesUseCase }