import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDialogContentComponent } from './rate-dialog-content.component';

describe('RateDialogComponent', () => {
  let component: RateDialogContentComponent;
  let fixture: ComponentFixture<RateDialogContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateDialogContentComponent]
    });
    fixture = TestBed.createComponent(RateDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
