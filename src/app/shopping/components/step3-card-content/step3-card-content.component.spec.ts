import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStep3ContentComponent } from './step3-card-content.component';

describe('CardStep3ContentComponent', () => {
  let component: CardStep3ContentComponent;
  let fixture: ComponentFixture<CardStep3ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStep3ContentComponent]
    });
    fixture = TestBed.createComponent(CardStep3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
