import { Router } from "express";
import { Category } from "../model/category";

const categoriesRoutes = Router();

// Criando array de nome "categories" e de tipo "Category[]" que é uma classe
const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  // criando objeto, porém dessa forma o constructor não é chamado
  // const category: Category = {
  //   name,
  //   description,
  //   created_at: new Date(),
  // };

  // Criando objeto
  const category = new Category();

  // É passado para o assign dois parâmetros, o primeiro é um objeto(que nesse caso é "category")
  // e o segundo são os atributos que serão jogados/preenchidos para dentro do objeto
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRoutes };
