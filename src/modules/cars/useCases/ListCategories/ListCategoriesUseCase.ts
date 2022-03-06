import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase{
  private categororiesRepository: ICategoriesRepository;
  constructor(categoriesRpository: ICategoriesRepository){
    this.categororiesRepository = categoriesRpository;
  }
  execute(): Category[]{
    const categories = this.categororiesRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
