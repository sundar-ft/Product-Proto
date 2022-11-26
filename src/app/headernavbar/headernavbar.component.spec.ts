import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernavbarComponent } from './headernavbar.component';

describe('HeadernavbarComponent', () => {
  let component: HeadernavbarComponent;
  let fixture: ComponentFixture<HeadernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadernavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
