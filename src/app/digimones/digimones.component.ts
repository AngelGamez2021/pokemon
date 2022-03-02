import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-digimones',
  templateUrl: './digimones.component.html',
  styleUrls: ['./digimones.component.css']
})
export class DigimonesComponent {

  //espera la informacion que envia el padre, en este caso las card
  @Input() dig: any [] = [];
  @Input() level: string="";
 
}
