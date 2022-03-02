import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Digimones } from 'src/app/digimones/digimones.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {


  
  @Output() search = new EventEmitter<string>();
  @Output() tipo = new EventEmitter<string>();
  
  level = '';
  
  informacion = ''; //encapsula la informacion de la caja de texto que se va escribiendo




  constructor() {}

  ngOnInit(): void {}

  buscador(data: any) {
    this.search.emit(data);
  }

  cambiarTipo (dato: string){

    this.tipo.emit(dato);

  }

  


}
