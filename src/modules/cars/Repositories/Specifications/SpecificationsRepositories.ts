import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepositories } from "./ISpecificationsRepositories";

class SpecificationsRepository implements ISpecificationsRepositories{
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance():SpecificationsRepository {
    if(!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
      const specification = this.specifications.find(
        (specification) => specification.name === name
      )
      return specification;
  }

  listAll(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository }