import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardContentComponent } from './product-card-content.component';

describe('ProductCardComponent', () => {
  let component: ProductCardContentComponent;
  let fixture: ComponentFixture<ProductCardContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardContentComponent]
    });
    fixture = TestBed.createComponent(ProductCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
