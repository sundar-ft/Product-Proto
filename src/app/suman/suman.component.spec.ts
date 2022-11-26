import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumanComponent } from './suman.component';

describe('SumanComponent', () => {
  let component: SumanComponent;
  let fixture: ComponentFixture<SumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
