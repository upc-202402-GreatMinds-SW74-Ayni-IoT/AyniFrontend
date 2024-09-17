import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardContentComponent } from './order-card-content.component';

describe('PurchaseCardContentComponent', () => {
  let component: OrderCardContentComponent;
  let fixture: ComponentFixture<OrderCardContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCardContentComponent]
    });
    fixture = TestBed.createComponent(OrderCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
