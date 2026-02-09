import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-ejemplo16',
  imports: [MatButtonModule, MatIconModule,MatFormFieldModule, MatInputModule,MatDatepickerModule],
  templateUrl: './ejemplo16.html',
  styleUrl: './ejemplo16.css',
   providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ejemplo16 {

}
