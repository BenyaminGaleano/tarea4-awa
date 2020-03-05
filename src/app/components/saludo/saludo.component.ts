import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  text: string;
  @Output() greet = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    this.greet.emit('Saludos a ' + this.text);
  }

}
