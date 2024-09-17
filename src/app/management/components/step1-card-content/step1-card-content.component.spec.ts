import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStep1ContentComponent } from './step1-card-content.component';

describe('CardStep1ContentComponent', () => {
  let component: CardStep1ContentComponent;
  let fixture: ComponentFixture<CardStep1ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStep1ContentComponent]
    });
    fixture = TestBed.createComponent(CardStep1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
