import { SpecificationsRepository } from "../../Repositories/Specifications/SpecificationsRepositories";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const createSpecificationsRepository = SpecificationsRepository.getInstance()
const createSpecificationsUseCase = new CreateSpecificationUseCase(createSpecificationsRepository)
const createSpecificationsController = new CreateSpecificationController(createSpecificationsUseCase)

export { createSpecificationsController }