import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPurchaseDialogContentComponent } from './cancel-purchase-dialog-content.component';

describe('CancelPurchaseDialogContentComponent', () => {
  let component: CancelPurchaseDialogContentComponent;
  let fixture: ComponentFixture<CancelPurchaseDialogContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelPurchaseDialogContentComponent]
    });
    fixture = TestBed.createComponent(CancelPurchaseDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
