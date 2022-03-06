import { Specifications } from "../../model/Specifications";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{
  private specifications: Specifications[];
  constructor(){
    this.specifications = [];
  }
  create({ name, description }: ICreateSpecificationDTO): void{
    const specification = new Specifications();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }
  findByName(name: string): Specifications{
    const specification = this.specifications.find((specific) => specific.name === name);
    return specification;
  }
}

export { SpecificationsRepository };
