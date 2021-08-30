import { Component, OnInit } from '@angular/core';
import { RoleUser } from '../RoleUser';
import { RolesService } from '../roles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listadoPermisos: Array<RoleUser> = new Array<RoleUser>();

  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    this.subscribeListadoRoles();
  }

  private subscribeListadoRoles() {
    // ESTE OBJETO SE LLENARÍA CON UN SERVICIO QUE OBTENGA LOS ROLES
    this.listadoPermisos = [
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
  }

}
