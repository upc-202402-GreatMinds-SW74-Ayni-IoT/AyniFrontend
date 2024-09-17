import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesGalleryContentComponent } from './rates-gallery-content.component';

describe('RateContentComponent', () => {
  let component: RatesGalleryContentComponent;
  let fixture: ComponentFixture<RatesGalleryContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatesGalleryContentComponent]
    });
    fixture = TestBed.createComponent(RatesGalleryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
