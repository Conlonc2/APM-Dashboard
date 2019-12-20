import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAttribsComponent } from './team-attribs.component';

describe('TeamAttribsComponent', () => {
  let component: TeamAttribsComponent;
  let fixture: ComponentFixture<TeamAttribsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAttribsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAttribsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
