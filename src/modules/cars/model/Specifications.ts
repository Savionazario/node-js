import { v4 as uuidV4 } from "uuid";

class Specifications{
  name: string;
  description: string;
  created_at: Date;
  id?: string;
  constructor(){ // No momento da instância da classe(new Specifications()) o id é criado
    if(!this.id){
      this.id = uuidV4();
    }
  }
}

export { Specifications };
