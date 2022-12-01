import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kyc1Component } from './kyc1.component';

describe('Kyc1Component', () => {
  let component: Kyc1Component;
  let fixture: ComponentFixture<Kyc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kyc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kyc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
