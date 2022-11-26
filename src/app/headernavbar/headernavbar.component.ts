import { Component } from '@angular/core';

@Component({
  selector: 'app-headernavbar',
  templateUrl: './headernavbar.component.html',
  styleUrls: ['./headernavbar.component.css']
})
export class HeadernavbarComponent  {
  opened:boolean=true;

  constructor() {

  }
  ngOnInit(): void {
  }
  openonclick(){
    this.opened=!this.opened;
 
}
}
