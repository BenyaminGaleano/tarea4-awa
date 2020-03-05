import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  op1: number;
  op2: number;

  @Output() resultado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  send(respuesta: number, op: string): void {
    this.resultado.emit('La respuesta de la ' + op + ' es ' + respuesta + ' desde Calculadora');
  }

  sendS(op1: number, op2: number): void {
    const r: number = Number(op1) + Number(op2);
    this.resultado.emit('La respuesta de la suma es ' + r + ' desde Calculadora');
  }

}
