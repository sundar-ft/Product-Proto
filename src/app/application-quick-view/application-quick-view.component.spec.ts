import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationQuickViewComponent } from './application-quick-view.component';

describe('ApplicationQuickViewComponent', () => {
  let component: ApplicationQuickViewComponent;
  let fixture: ComponentFixture<ApplicationQuickViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationQuickViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
