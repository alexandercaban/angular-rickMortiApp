import { GenericDto } from "./GenericDto";
export class DataEntrante extends GenericDto{
  image: string;
  name: string;
  species: string;
  gender: string;
  created: string;
  
  public constructor(init?: Partial<DataEntrante>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
}