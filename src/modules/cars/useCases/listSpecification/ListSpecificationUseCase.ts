import { Specification } from "../../model/Specification";
import { ISpecificationsRepositories } from "../../Repositories/Specifications/ISpecificationsRepositories";

class ListSpecificationUseCase {
  constructor(private specificationRepositories: ISpecificationsRepositories) {}

  execute(): Specification[] {
    const specifications = this.specificationRepositories.listAll()

    return specifications
  }
}

export { ListSpecificationUseCase }