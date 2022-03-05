import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest{
  name: string;
  description:string;
}

class CreateSpecificationService{
  private specificationsRepository: ISpecificationsRepository;
  constructor(specificationsRepository: ISpecificationsRepository){
    this.specificationsRepository = specificationsRepository;
  }
  execute({ name, description }: IRequest): void{
    const specificationALeredyExists = this.specificationsRepository.findByName(name);
    if(specificationALeredyExists){
      throw new Error("Specification alredy exists!");
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
