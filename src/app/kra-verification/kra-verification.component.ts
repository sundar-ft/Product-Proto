import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-kra-verification',
  templateUrl: './kra-verification.component.html',
  styleUrls: ['./kra-verification.component.css']
})
export class KraVerificationComponent {
  isdelete: boolean = false;
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
}
