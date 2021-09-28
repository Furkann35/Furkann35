import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDeniedComponent } from './answer-denied.component';

describe('AnswerDeniedComponent', () => {
  let component: AnswerDeniedComponent;
  let fixture: ComponentFixture<AnswerDeniedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerDeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
