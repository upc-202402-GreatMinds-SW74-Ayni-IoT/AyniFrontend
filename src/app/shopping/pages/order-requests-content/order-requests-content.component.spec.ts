import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRequestsContentComponent } from './order-requests-content.component';

describe('OrderRequestsComponent', () => {
  let component: OrderRequestsContentComponent;
  let fixture: ComponentFixture<OrderRequestsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderRequestsContentComponent]
    });
    fixture = TestBed.createComponent(OrderRequestsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
