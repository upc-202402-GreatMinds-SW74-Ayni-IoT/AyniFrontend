import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInformationContentComponent } from './order-information-content.component';

describe('PurchaseDetailsContentComponent', () => {
  let component: OrderInformationContentComponent;
  let fixture: ComponentFixture<OrderInformationContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderInformationContentComponent]
    });
    fixture = TestBed.createComponent(OrderInformationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
