import { Component } from '@angular/core';

@Component({
  selector: 'app-permission-request',
  templateUrl: './permission-request.component.html',
  styleUrls: ['./permission-request.component.css']
})
export class PermissionRequestComponent {
  otp:boolean=false;

  sendotp(){
    this.otp=!this.otp
    }
}



