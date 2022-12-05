import { Component, Input } from '@angular/core';
import { NgbModalConfig, NgbModal, } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-kra-verification',
  templateUrl: './kra-verification.component.html',
  styleUrls: ['./kra-verification.component.css']
})
export class KraVerificationComponent {
  @Input() showstepper : boolean = true;
  isdelete: boolean = false;
  isdelete1: boolean = false;
  identify:boolean=false;
  address:boolean=false;
  contact:boolean=false;

	constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}


	close(){
		this.isdelete=!this.isdelete
	  }
    close1(){
      this.isdelete1=!this.isdelete1
      this.identify = !this.identify
      this.address = !this.address
      
 
      }
    Identify(){
      this.identify = !this.identify
    }
    Addressdetail(){
      this.address = !this.address
    }
    Contact(){
      this.contact = !this.contact
    }
	  open(content:any) {
		this.modalService.open(content);
	}
  closeModel(){
    this.modalService.dismissAll();
  }
}
