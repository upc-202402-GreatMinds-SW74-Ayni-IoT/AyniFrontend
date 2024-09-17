import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsGalleryContentComponent } from './costs-gallery-content.component';

describe('TableCostContentComponent', () => {
  let component: CostsGalleryContentComponent;
  let fixture: ComponentFixture<CostsGalleryContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostsGalleryContentComponent]
    });
    fixture = TestBed.createComponent(CostsGalleryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
