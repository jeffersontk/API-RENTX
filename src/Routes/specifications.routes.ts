import { Router } from "express";
import { createSpecificationsController } from "../modules/cars/useCases/CreateSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

const specificationRoutes = Router()
specificationRoutes.post("/", (request, response) => {
 return createSpecificationsController.handle(request, response)
}) 

specificationRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response)
})

export { specificationRoutes }