import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerLargeComponent } from './spinner-large.component';

describe('SpinnerLargeComponent', () => {
  let component: SpinnerLargeComponent;
  let fixture: ComponentFixture<SpinnerLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
