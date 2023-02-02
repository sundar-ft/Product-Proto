import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',

  providers: [NgbModalConfig, NgbModal],
})
export class ApplicationDashboardComponent {
   search:boolean=false
   isdelete: boolean = false;
   heart:boolean=false;
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);
	}

	searchbox(){
		this.search=!this.search
	}
	open2(content2:any) {
		this.modalService.open(content2);
		
	}
	setheart(){
		this.heart=!this.heart
	}
	close(){
		this.modalService.dismissAll();
		this.isdelete=!this.isdelete
	  }

}
