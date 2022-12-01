import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KraVerificationComponent } from './kra-verification.component';

describe('KraVerificationComponent', () => {
  let component: KraVerificationComponent;
  let fixture: ComponentFixture<KraVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KraVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KraVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
