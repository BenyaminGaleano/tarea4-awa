import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  holder: string[] = [ ];

  constructor() { }

  ngOnInit(): void { }

  /* función encargada de recibir la información de los
  hijos y notificar el cambio a DisplayComponent */
  notify(response: string): void {
    if (this.holder.length === 5) {
      this.holder.shift();
    }
    this.holder.push(response);
  }

}
