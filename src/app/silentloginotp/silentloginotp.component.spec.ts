import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentloginotpComponent } from './silentloginotp.component';

describe('SilentloginotpComponent', () => {
  let component: SilentloginotpComponent;
  let fixture: ComponentFixture<SilentloginotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilentloginotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilentloginotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
