import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigimonesComponent } from './digimones/digimones.component';
import { DigimonesServices } from './digimones/digimones.service';
import { BuscadorComponent } from './buscador/buscador/buscador.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DigimonesComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DigimonesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
