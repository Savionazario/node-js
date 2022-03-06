import fs from "fs"; // Importando fs(fileSystem) que é do próprio node

class ImportCategoryUseCase{
  execute(file: Express.Multer.File): void{
    console.log(file);
  }
}

export { ImportCategoryUseCase };
