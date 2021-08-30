import { Component, OnInit } from '@angular/core';
import { OutputService } from '../output.service';
import { DataEntrante } from '../DataEntrante';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  /*public dataEntrante= {
    image: "",
    name: "",
    species: "",
    gender: "",
    created: "",
  } ;*/

  public dataEntrante = <any> {};

  //public dataEntrante: DataEntrante = new DataEntrante()
  constructor(public service:OutputService) { }

  ngOnInit(): void {
    this.service.disparador.subscribe((res:any) => {
     this.dataEntrante = res.data;
     console.log(this.dataEntrante.image);
     console.log(res.data);
    });
  }

}
