import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailreadComponent } from './emailread.component';

describe('EmailreadComponent', () => {
  let component: EmailreadComponent;
  let fixture: ComponentFixture<EmailreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
