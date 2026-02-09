import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-ejemplo13-hijo',
  imports: [],
  templateUrl: './ejemplo13-hijo.html',
  styleUrl: './ejemplo13-hijo.css',
})
export class Ejemplo13Hijo {
  // forma antigua
  //@Output() pedirDinero = new EventEmitter()
  pedirDinero = output<number>()

  pedirDineroAPapa(cantidad: number){
    this.pedirDinero.emit(cantidad)
  } 
}
