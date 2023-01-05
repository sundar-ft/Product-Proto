import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
    hide : boolean =false

    hideshow(){
      this.hide=!this.hide
    }
    
}
