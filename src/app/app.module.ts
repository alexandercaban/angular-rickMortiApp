import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { LugaresComponent } from './lugares/lugares.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { ApiRestService } from './api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe } from './upper-case.pipe';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RolesDirective } from './roles.directive';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { CardComponent } from './card/card.component';
import { OutputService } from './output.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PersonajesComponent,
    LugaresComponent,
    EpisodiosComponent,
    UpperCasePipe,
    LoginComponent,
    RolesDirective,
    DetallePersonajesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
