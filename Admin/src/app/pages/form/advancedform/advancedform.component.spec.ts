import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedformComponent } from './advancedform.component';

describe('AdvancedformComponent', () => {
  let component: AdvancedformComponent;
  let fixture: ComponentFixture<AdvancedformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
