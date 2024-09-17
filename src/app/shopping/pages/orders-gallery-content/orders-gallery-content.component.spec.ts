import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersGalleryContentComponent } from './orders-gallery-content.component';

describe('PurchasesContentComponent', () => {
  let component: OrdersGalleryContentComponent;
  let fixture: ComponentFixture<OrdersGalleryContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersGalleryContentComponent]
    });
    fixture = TestBed.createComponent(OrdersGalleryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
