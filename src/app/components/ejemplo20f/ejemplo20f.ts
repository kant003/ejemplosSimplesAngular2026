import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';

@Component({
  selector: 'app-ejemplo20f',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo20f.html',
  styleUrl: './ejemplo20f.css',
})
export class Ejemplo20f {
  productos = ['Fresa', 'Limón', 'Plátano', 'Naranja']
  search = new FormControl('')

  filtro$ = this.search.valueChanges.pipe(
      startWith(''),
      map(text => text?.trim()),
      map(text => text?.toLocaleLowerCase()),
      map(text => this.productos.filter(p=>p.toLocaleLowerCase().includes(text || ''))),
      distinctUntilChanged(),
      debounceTime(700)
  )
  
  
}
