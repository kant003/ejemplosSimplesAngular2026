import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo6',
  imports: [FormsModule],
  templateUrl: './ejemplo6.html',
  styleUrl: './ejemplo6.css',
})
export class Ejemplo6 {
  url='https://picsum.photos/id/237/200/300';
  width=200;
}
