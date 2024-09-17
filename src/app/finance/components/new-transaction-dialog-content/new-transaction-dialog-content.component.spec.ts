import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionDialogContentComponent } from './new-transaction-dialog-content.component';

describe('DialogContentComponent', () => {
  let component: NewTransactionDialogContentComponent;
  let fixture: ComponentFixture<NewTransactionDialogContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTransactionDialogContentComponent]
    });
    fixture = TestBed.createComponent(NewTransactionDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
