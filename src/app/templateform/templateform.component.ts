import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent {
  getData:any={};
  register(regdata: NgForm) {
    console.log(regdata.value);
    console.log(regdata.valid);
    //this.getData=regdata;
  }
}

