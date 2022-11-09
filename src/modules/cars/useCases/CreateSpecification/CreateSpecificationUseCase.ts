import { ISpecificationsRepositories } from "../../Repositories/Specifications/ISpecificationsRepositories";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationController: ISpecificationsRepositories) {}

  execute({name, description}:IRequest): void{
    const specificationAlreadyExists = this.specificationController.findByName(name)

    if(specificationAlreadyExists) throw new Error("Specification already exists!")

    this.specificationController.create({
      name,
      description
    })
  }
}

export { CreateSpecificationUseCase }