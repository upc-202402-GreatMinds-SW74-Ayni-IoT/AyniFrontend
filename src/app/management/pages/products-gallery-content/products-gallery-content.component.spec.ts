import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGalleryContentComponent } from './products-gallery-content.component';

describe('ProductsContentComponent', () => {
  let component: ProductsGalleryContentComponent;
  let fixture: ComponentFixture<ProductsGalleryContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsGalleryContentComponent]
    });
    fixture = TestBed.createComponent(ProductsGalleryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
