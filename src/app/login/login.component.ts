import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password:boolean=false;
  loader:boolean=false;
  loaderbutton:boolean=false;


  Password(){
		this.password=!this.password
	  }
    spinner(){
      this.loader=!this.loader
    }
    Loader(){
      this.loaderbutton=!this.loaderbutton
    }
}
