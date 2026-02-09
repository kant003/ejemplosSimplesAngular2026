import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ejemplo19',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './ejemplo19.html',
  styleUrl: './ejemplo19.css',
})
export class Ejemplo19 implements OnInit{
  formBuilder = inject(FormBuilder)

  form: FormGroup = new FormGroup({})

  ngOnInit(){
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.email]]
      }
    )
  }

  handleSubmit(){
    if(this.form.invalid) return

    alert(`Me has enviado los datos correctamente:
        ${this.form.value.name}
        ${this.form.value.email}
        `)
  }
}
