import { Specification } from "../../model/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepositories {
  create({name, description}: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
  listAll(): Specification[]
}

export {ISpecificationsRepositories}