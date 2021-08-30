import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private api: ApiRestService) { }

  public characters:any = [];

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.api.get("https://rickandmortyapi.com/api/character").subscribe((resp:any) =>{
      this.characters = resp.results;
    })
  }


}
