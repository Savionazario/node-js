import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository{
  private categories: Category[];
  constructor(){
    this.categories = [];
  }
  create({ name, description }: ICreateCategoryDTO): void{
    const category = new Category();

    // É passado para o assign dois parâmetros, o primeiro é um objeto(que nesse caso é "category")
    // e o segundo são os atributos que serão jogados/preenchidos para dentro do objeto
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }
  list(): Category[]{
    return this.categories;
  }
  findByName(name: string): Category{
    const category = this.categories.find((categ) => categ.name === name);
    return category;
  }
}

export { CategoriesRepository };
