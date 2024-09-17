import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInformationContentComponent } from './sale-information-content.component';

describe('SaleDetailsContentComponent', () => {
  let component: SaleInformationContentComponent;
  let fixture: ComponentFixture<SaleInformationContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleInformationContentComponent]
    });
    fixture = TestBed.createComponent(SaleInformationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
