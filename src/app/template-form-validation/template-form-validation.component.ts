import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './template-form-validation.component.html',
  styleUrl: './template-form-validation.component.scss'
})
export class TemplateFormValidationComponent {
 
}
