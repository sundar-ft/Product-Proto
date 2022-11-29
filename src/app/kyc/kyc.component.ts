import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  
})
export class KycComponent {
	isdelete: boolean = false;


	constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);
	}
	close(){
		this.isdelete=!this.isdelete
	  }

	  open1(content1:any) {
		this.modalService.open(content1);
	}

}
