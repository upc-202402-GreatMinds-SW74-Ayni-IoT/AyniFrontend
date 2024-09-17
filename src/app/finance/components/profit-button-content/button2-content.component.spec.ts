import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button2ContentComponent } from './button2-content.component';

describe('Button2ContentComponent', () => {
  let component: Button2ContentComponent;
  let fixture: ComponentFixture<Button2ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button2ContentComponent]
    });
    fixture = TestBed.createComponent(Button2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
