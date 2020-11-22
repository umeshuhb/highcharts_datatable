import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardbodyComponent } from './dashboardbody.component';

describe('DashboardbodyComponent', () => {
  let component: DashboardbodyComponent;
  let fixture: ComponentFixture<DashboardbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
