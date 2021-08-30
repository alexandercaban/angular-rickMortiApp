import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { GuardaGuard } from './guarda.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LugaresComponent } from './lugares/lugares.component';
import { PersonajesComponent } from './personajes/personajes.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [GuardaGuard]
  },
  {
    path: 'personajes',
    component: PersonajesComponent,
    canActivate: [GuardaGuard]
  },
  {
    path: 'lugares',
    component: LugaresComponent,
    canActivate: [GuardaGuard]
  },
  {
    path: 'episodios',
    component: EpisodiosComponent,
    canActivate: [GuardaGuard]
  },
  {
    path: 'card',
    component: CardComponent,
    canActivate: [GuardaGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
