import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentloginlandingComponent } from './silentloginlanding.component';

describe('SilentloginlandingComponent', () => {
  let component: SilentloginlandingComponent;
  let fixture: ComponentFixture<SilentloginlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilentloginlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilentloginlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
