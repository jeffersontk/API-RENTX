import { ICategoriesRepositories } from "../../Repositories/Categories/ICategoriesRepositories";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepositories: ICategoriesRepositories) {}

  execute({name, description}: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepositories.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error("Category already exists!")
    }
  
    this.categoriesRepositories.create({name, description})
  }
}

export { CreateCategoryUseCase }