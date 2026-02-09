import { Component, inject } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty-service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-ejemplo14b',
  imports: [CommonModule],
  templateUrl: './ejemplo14b.html',
  styleUrl: './ejemplo14b.css',
})
export class Ejemplo14b {
  readonly rickandmortyService = inject(RickandmortyService)
  personajes$ = this.rickandmortyService.getAll().pipe(map(r => r.results));
}
