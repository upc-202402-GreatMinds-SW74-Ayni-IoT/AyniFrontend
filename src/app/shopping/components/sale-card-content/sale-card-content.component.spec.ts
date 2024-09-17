import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCardContentComponent } from './sale-card-content.component';

describe('SaleCardContentComponent', () => {
  let component: SaleCardContentComponent;
  let fixture: ComponentFixture<SaleCardContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleCardContentComponent]
    });
    fixture = TestBed.createComponent(SaleCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
