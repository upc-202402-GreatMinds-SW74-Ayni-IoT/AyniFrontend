import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitsGalleryContentComponent } from './profits-gallery-content.component';

describe('TableBillContentComponent', () => {
  let component: ProfitsGalleryContentComponent;
  let fixture: ComponentFixture<ProfitsGalleryContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitsGalleryContentComponent]
    });
    fixture = TestBed.createComponent(ProfitsGalleryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
