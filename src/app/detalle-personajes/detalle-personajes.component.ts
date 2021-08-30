import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OutputService } from '../output.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.css']
})
export class DetallePersonajesComponent implements OnInit {
  @Input() dataEntrante:any;
  constructor(public service:OutputService, private router:Router ) { }

  ngOnInit(): void {
  }

  verDetalle(){
    this.service.disparador.emit({
      data: this.dataEntrante
    })
   // this.router.navigate(['/card']);
  }

}
