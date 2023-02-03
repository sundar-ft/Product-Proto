import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
   sendotp:boolean=false;
   verifyotp:boolean=false;


   Sendotp(){
    this.sendotp=!this.sendotp;
   }
   Verifyotp(){
    this.verifyotp=!this.verifyotp
   }
}
