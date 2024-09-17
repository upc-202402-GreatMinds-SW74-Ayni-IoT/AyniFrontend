import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsListContentComponent } from './transactions-list-content.component';

describe('FinanceMainContentComponent', () => {
  let component: TransactionsListContentComponent;
  let fixture: ComponentFixture<TransactionsListContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsListContentComponent]
    });
    fixture = TestBed.createComponent(TransactionsListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
