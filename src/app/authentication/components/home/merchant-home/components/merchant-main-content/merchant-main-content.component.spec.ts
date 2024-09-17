import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantMainContentComponent } from './merchant-main-content.component';

describe('MerchantMainContentComponent', () => {
  let component: MerchantMainContentComponent;
  let fixture: ComponentFixture<MerchantMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantMainContentComponent]
    });
    fixture = TestBed.createComponent(MerchantMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
