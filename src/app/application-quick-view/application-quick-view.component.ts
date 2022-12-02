import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-application-quick-view',
  templateUrl: './application-quick-view.component.html',
  styleUrls: ['./application-quick-view.component.css']
})
export class ApplicationQuickViewComponent {
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
  open2(content2:any) {
		this.modalService.open(content2);
	}
}
