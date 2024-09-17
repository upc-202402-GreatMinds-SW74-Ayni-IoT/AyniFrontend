import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInformationContentComponent } from './product-information-content.component';

describe('ProductDetailsContentComponent', () => {
  let component: ProductInformationContentComponent;
  let fixture: ComponentFixture<ProductInformationContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductInformationContentComponent]
    });
    fixture = TestBed.createComponent(ProductInformationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
