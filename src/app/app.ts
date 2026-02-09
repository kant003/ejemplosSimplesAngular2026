import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejemplo0 } from './components/ejemplo0/ejemplo0';
import { Ejemplo1 } from './components/ejemplo01/ejemplo1';
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('teoriaAngularBase2026');
}
