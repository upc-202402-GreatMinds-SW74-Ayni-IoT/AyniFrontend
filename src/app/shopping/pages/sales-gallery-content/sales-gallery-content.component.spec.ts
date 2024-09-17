import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGalleryContentComponent } from './sales-gallery-content.component';

describe('SalesContentComponent', () => {
  let component: SalesGalleryContentComponent;
  let fixture: ComponentFixture<SalesGalleryContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesGalleryContentComponent]
    });
    fixture = TestBed.createComponent(SalesGalleryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
