import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaleFormContentComponent } from './new-sale-form-content.component';

describe('AddSaleContentComponent', () => {
  let component: NewSaleFormContentComponent;
  let fixture: ComponentFixture<NewSaleFormContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSaleFormContentComponent]
    });
    fixture = TestBed.createComponent(NewSaleFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
