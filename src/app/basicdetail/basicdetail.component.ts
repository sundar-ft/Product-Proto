import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-basicdetail',
  templateUrl: './basicdetail.component.html',
  styleUrls: ['./basicdetail.component.css'],
 

})
export class BasicdetailComponent {
  emailFormControl = new FormControl('', []);
  panFormControl = new FormControl('', []);
  dobFormControl = new FormControl('', []);
  fullnameFormControl = new FormControl('', []);
  mobileFormControl = new FormControl('', []);
  
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}
