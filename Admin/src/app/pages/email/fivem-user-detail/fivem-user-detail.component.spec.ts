import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivemUserDetailComponent } from './fivem-user-detail.component';

describe('FivemUserDetailComponent', () => {
  let component: FivemUserDetailComponent;
  let fixture: ComponentFixture<FivemUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivemUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivemUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
