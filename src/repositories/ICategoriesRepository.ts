import { Category } from "../model/Category";

// DTO -> Data Transfer Object -> Objeto responsavel pela transferência de dados entre classes
interface ICreateCategoryDTO{
  name: string;
  description: string;
}

interface ICategoriesRepository{
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
