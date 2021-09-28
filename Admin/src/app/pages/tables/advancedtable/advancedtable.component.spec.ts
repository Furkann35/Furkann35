import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedtableComponent } from './advancedtable.component';

describe('AdvancedtableComponent', () => {
  let component: AdvancedtableComponent;
  let fixture: ComponentFixture<AdvancedtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
