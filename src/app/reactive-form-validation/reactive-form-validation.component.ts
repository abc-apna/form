import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.scss']
})
export class ReactiveFormValidationComponent implements OnInit {

  regForm!: FormGroup; // Using definite assignment assertion

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this._fb.group({
      fid: ['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
      fname: ['',Validators.required],
      lname: ['',Validators.required],
      email: ['',Validators.compose([Validators.required,Validators.email])],
      mobileno: ['8141873301',Validators.required],
    });
  }

  register(formData: FormGroup): void {
    console.log(this.regForm.value);
     console.log(formData.valid);
     console.log(this.regForm.get('fname')?.value);
     console.log(this.regForm.get('email')?.value);
  }
  reset()
  {
   // this.regForm.reset();
   this.regForm.reset({
    fname:'saloni'  //bydefault display this value
    //fname:this.regForm.get('fname')?.value()
   })
  }
  filldata()
   {
    this.regForm.setValue({
      fid:101,
      fname:'riya',
      lname:'shah',
      email:'riya@gmail.com',
      mobileno:'7096027759'
    })
   }
   patchdata()
   {
    this.regForm.patchValue({
      //fid:101,
      fname:'priya',
      lname:'mehta',
      email:'priya@gmail.com',
      mobileno:'7896678888'

    })
   
    
   }
}
