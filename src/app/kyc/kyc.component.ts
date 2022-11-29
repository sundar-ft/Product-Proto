import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  encapsulation: ViewEncapsulation.None,
	styles: [
		
	],
})
export class KycComponent {

  closeResult !: string;

	constructor(private modalService: NgbModal) {}

	openBackDropCustomClass(content:any) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

	openWindowCustomClass(content:any) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

}
