import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { TemplateFormValidationComponent } from './template-form-validation/template-form-validation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateformComponent,ReactiveformComponent,ReactiveFormValidationComponent,TemplateFormValidationComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form';
  
 constructor()
 {

  localStorage.setItem("userid","1");
  sessionStorage.setItem("username","riya");
 }
}
