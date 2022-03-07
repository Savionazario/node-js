import fs from "fs"; // Importando fs(fileSystem) que é do próprio node
import { parse } from "csv-parse"; // Biblioteca de parse para trabalhar com stream e pipe
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IImportCategory{
  name: string;
  description: string;
}

class ImportCategoryUseCase{
  private categoriesRepository: CategoriesRepository;
  constructor(categoriesRepository: CategoriesRepository){
    this.categoriesRepository = categoriesRepository;
  }

  // Função que recebe o arquivo, faz a leitura e o parse do mesmo
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
    return new Promise((resolve, reject) =>{
      // A função createReadStream() permite que a gente faça a leitura do arquivo em partes
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      
      const parseFile = parse();
  
      // o pipe pega cada stream/pedaço do arquivo e envia para o local passado como parâmetro
      stream.pipe(parseFile);

      // O sengundo on quer dizer que quando finalizar o parse do arquivo é pra colocar o categories dentro da promise
      parseFile
      .on("data", async(line) =>{
        const [ name, description ] = line;
        categories.push({ name, description });
      }).on("end", () =>{
        resolve(categories);
      }).on("error", (err) =>{
        reject(err);
      });
    })

    //return categories;
  }

  // Função async(Assícrona) pois o retorno da função de load é um promise
  async execute(file: Express.Multer.File): Promise<void>{
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if(!existCategory){
        this.categoriesRepository.create({ name, description });
      }

    });
  }
}

export { ImportCategoryUseCase };
