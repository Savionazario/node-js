import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class createCategoryController{
  private createCategoryUseCase: CreateCategoryUseCase;
  constructor(createCategoryUseCase: CreateCategoryUseCase){
    this.createCategoryUseCase = createCategoryUseCase;
  }
  handle(request: Request, response: Response): Response{
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { createCategoryController };
