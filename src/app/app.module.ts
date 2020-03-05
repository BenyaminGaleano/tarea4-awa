import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { DisplayComponent } from './components/display/display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    CalculadoraComponent,
    SaludoComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
