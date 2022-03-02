import { Component } from '@angular/core';
import { Digimones } from './digimones/digimones.interface';
import { DigimonesServices } from './digimones/digimones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  level: string="";

  digimones: Digimones[] = [];
  copyDigimon: Digimones [] = [];
  //me trae la interface creada

  constructor(public digimon: DigimonesServices) {}

  digimonFilter(data: any) {
   
    
    this.digimones = this.copyDigimon.filter((digi) =>
    digi.name.toString()
    .toLowerCase()
    .includes(data.toLowerCase()))
  }


  cambiarTipo(data:string){
    this.level=data;
  }


  ngOnInit() {

 

    this.digimon.getDigimones().subscribe(
      (digiData) => {
        this.digimones = digiData;
     
        this.copyDigimon = digiData;
      },
      (e) => {
        console.error(e);
      }
    );
  }
}
