import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCardContentComponent } from './rate-card-content.component';

describe('RateCardContentComponent', () => {
  let component: RateCardContentComponent;
  let fixture: ComponentFixture<RateCardContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateCardContentComponent]
    });
    fixture = TestBed.createComponent(RateCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
