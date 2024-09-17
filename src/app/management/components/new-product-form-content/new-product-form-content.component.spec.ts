import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductFormContentComponent } from './new-product-form-content.component';

describe('AddProductContentComponent', () => {
  let component: NewProductFormContentComponent;
  let fixture: ComponentFixture<NewProductFormContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductFormContentComponent]
    });
    fixture = TestBed.createComponent(NewProductFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
