import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  
})
export class KycComponent {
	isdelete: boolean = false;
	selectedIndex = 0;


	constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	selectTab(index: number): void {
		this.selectedIndex = index;
	  }

	open(content:any) {
		this.modalService.open(content);
	}
	close(){
		this.modalService.dismissAll();
		this.isdelete=!this.isdelete
	  }

	  open1(content1:any) {
		this.modalService.open(content1);
	}

}
