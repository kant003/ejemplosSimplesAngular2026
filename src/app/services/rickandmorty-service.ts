import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character } from '../models/Character';

interface Characters{
  results: Character[]
}

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  httpClient = inject(HttpClient)
/*   constructor(private httpClient: HttpClient){ // forma antigua
  } */
  getAll(){
    const URL = 'https://rickandmortyapi.com/api/character'
    return this.httpClient.get<Characters>(URL)
  }
  
}
