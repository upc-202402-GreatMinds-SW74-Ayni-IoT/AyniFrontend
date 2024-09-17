import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNavigationComponent } from './farmer-navigation.component';

describe('NavigationComponent', () => {
  let component: FarmerNavigationComponent;
  let fixture: ComponentFixture<FarmerNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerNavigationComponent]
    });
    fixture = TestBed.createComponent(FarmerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
