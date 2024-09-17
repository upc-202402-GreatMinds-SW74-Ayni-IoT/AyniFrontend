import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContentComponent } from './button-content.component';

describe('ButtonContentComponent', () => {
  let component: ButtonContentComponent;
  let fixture: ComponentFixture<ButtonContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonContentComponent]
    });
    fixture = TestBed.createComponent(ButtonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
