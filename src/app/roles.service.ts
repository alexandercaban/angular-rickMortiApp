import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RoleUser } from './RoleUser';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private httpClient: HttpClient) { }

  /*currentUser(){
    return this.httpClient.get('url');
  }*/

  subjectlistadoRoles = new Subject<RoleUser[]>();
  listadoRoles: Array<RoleUser> = new Array<RoleUser>();

  /*getRoles(): void {
   // let  listadoSucursalesTemp: Array<RoleUser> = new Array<RoleUser>();
   // listadoSucursalesTemp = this.listadoRoles.splice(0, this.listadoRoles.length);
   this.listadoRoles = [
    { 
      nombreModulo: 'Personajes',
      url:'/personajes',
      roles:['write','read']
    },
    { 
      nombreModulo: 'Lugares',
      url:'/lugares',
      roles:['write']
    },
    { 
      nombreModulo: 'Episodios',
      url:'/episodios',
      roles:['read']
    },
   ]
   return this.subjectlistadoRoles.next(this.listadoRoles);
  }*/

  getObservableRoles(): Observable<RoleUser[]> {

    this.listadoRoles = [
      { 
        nombreModulo: 'Personajes',
        url:'/personajes',
        roles:['write','read']
      },
      { 
        nombreModulo: 'Lugares',
        url:'/lugares',
        roles:['write']
      },
      { 
        nombreModulo: 'Episodios',
        url:'/episodios',
        roles:['read']
      },
     ]
    this.subjectlistadoRoles.next(this.listadoRoles);
    return this.subjectlistadoRoles;
  }

}
