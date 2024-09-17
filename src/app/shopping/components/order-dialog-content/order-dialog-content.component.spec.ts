import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDialogContentComponent } from './order-dialog-content.component';

describe('OrderDialogComponent', () => {
  let component: OrderDialogContentComponent;
  let fixture: ComponentFixture<OrderDialogContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDialogContentComponent]
    });
    fixture = TestBed.createComponent(OrderDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
