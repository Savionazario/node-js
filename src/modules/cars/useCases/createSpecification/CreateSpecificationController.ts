import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController{
  private createSpecificationsUseCase: CreateSpecificationUseCase;
  constructor(createSpecificationsUseCase: CreateSpecificationUseCase){
    this.createSpecificationsUseCase = createSpecificationsUseCase;
  }
  handle(request: Request, response: Response): Response{
    const { name, description } = request.body;
    
    this.createSpecificationsUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
