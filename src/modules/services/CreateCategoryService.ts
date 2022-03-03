import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest{
  name: string;
  description: string;
}

class CreateCategoryService{
  private categoriesRepository: ICategoriesRepository;
  constructor(categoriesRepository: ICategoriesRepository){
    this.categoriesRepository = categoriesRepository;
  }
  execute({ name, description }: IRequest): void{
    const categoryAlredyExists = this.categoriesRepository.findByName(name);

    if(categoryAlredyExists){
      throw new Error("Category alredy exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
