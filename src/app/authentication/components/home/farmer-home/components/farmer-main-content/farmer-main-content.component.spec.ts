import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMainContentComponent } from './farmer-main-content.component';

describe('FarmerMainContentComponent', () => {
  let component: FarmerMainContentComponent;
  let fixture: ComponentFixture<FarmerMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerMainContentComponent]
    });
    fixture = TestBed.createComponent(FarmerMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
