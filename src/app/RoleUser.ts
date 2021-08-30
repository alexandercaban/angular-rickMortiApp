import { GenericDto } from "./GenericDto";
export class RoleUser extends GenericDto{
  roles: string [];
  url: string;
  nombreModulo: string;
  
  public constructor(init?: Partial<RoleUser>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
}