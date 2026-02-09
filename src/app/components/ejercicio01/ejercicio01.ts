import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  imports: [CommonModule],
  templateUrl: './ejercicio01.html',
  styleUrl: './ejercicio01.css',
})
export class Ejercicio01 {
  numeros = [200, 233, 20, 19, 30, 35]
  
  isEven(numero: number){
    return numero % 2 === 0
  }

}
