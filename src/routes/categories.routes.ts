import { Router } from "express";
import { CategoriesRepository } from "../modules/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/services/CreateCategoryService";

const categoriesRoutes = Router();

// Criando array de nome "categories" e de tipo "Category[]" que é uma classe
// const categories: Category[] = []; -> foi la para CategoriesRepository
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  // criando objeto, porém dessa forma o constructor não é chamado
  // const category: Category = {
  //   name,
  //   description,
  //   created_at: new Date(),
  // };

  // Criando o serviço de createCategory e passando o repositório categoriesRepository
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
