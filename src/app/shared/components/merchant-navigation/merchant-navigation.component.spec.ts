import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantNavigationComponent } from './merchant-navigation.component';

describe('MerchatNavigationComponent', () => {
  let component: MerchantNavigationComponent;
  let fixture: ComponentFixture<MerchantNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantNavigationComponent]
    });
    fixture = TestBed.createComponent(MerchantNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
