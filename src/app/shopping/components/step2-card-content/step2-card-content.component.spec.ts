import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStep2ContentComponent } from './step2-card-content.component';

describe('CardStep2ContentComponent', () => {
  let component: CardStep2ContentComponent;
  let fixture: ComponentFixture<CardStep2ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStep2ContentComponent]
    });
    fixture = TestBed.createComponent(CardStep2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
