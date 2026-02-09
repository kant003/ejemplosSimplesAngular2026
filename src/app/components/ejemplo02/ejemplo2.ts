import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  imports: [],
  templateUrl: './ejemplo2.html',
  styleUrl: './ejemplo2.css',
})
export class Ejemplo2 {
  // Atributo
  count = 1
  // metodos
  incrementar() {
    this.count++
  }
}
