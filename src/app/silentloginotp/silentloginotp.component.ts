import { Component } from '@angular/core';

@Component({
  selector: 'app-silentloginotp',
  templateUrl: './silentloginotp.component.html',
  styleUrls: ['./silentloginotp.component.css']
})
export class SilentloginotpComponent {
  sendotp:boolean=false;

  otp(){
    this.sendotp=!this.sendotp
  }
}
