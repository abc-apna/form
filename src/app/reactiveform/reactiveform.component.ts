import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  isFormVisible=true; 
  regForm: FormGroup = new FormGroup({}); // Initialize with an empty FormGroup
  items:string[]=['i1','i2','i3'];
  userrole:string="admindfdg";

  ngOnInit() {
    this.regForm = new FormGroup({
      id: new FormControl(['',Validators.required]),
      fname: new FormControl(),
      lname: new FormControl(),
      email: new FormControl(),
      mobileno: new FormControl(),
    });
  }

  register(formdata: FormGroup) {
    console.log(formdata.value);
  }
}
