import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  constructor(private api: ApiRestService) { }
  locations$: Observable<any>;

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations(){
    this.locations$ = this.api.get("https://rickandmortyapi.com/api/location");
  }

}
