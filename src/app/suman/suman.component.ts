import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suman',
  templateUrl: './suman.component.html',
  styleUrls: ['./suman.component.css'],
  providers: [NgbModalConfig, NgbModal],
 
})
export class SumanComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);
	}
}


