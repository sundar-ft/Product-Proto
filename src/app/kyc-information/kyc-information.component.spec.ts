import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycInformationComponent } from './kyc-information.component';

describe('KycInformationComponent', () => {
  let component: KycInformationComponent;
  let fixture: ComponentFixture<KycInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KycInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
