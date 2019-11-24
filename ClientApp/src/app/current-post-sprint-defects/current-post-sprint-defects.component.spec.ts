import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPostSprintDefectsComponent } from './current-post-sprint-defects.component';

describe('CurrentPostSprintDefectsComponent', () => {
  let component: CurrentPostSprintDefectsComponent;
  let fixture: ComponentFixture<CurrentPostSprintDefectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPostSprintDefectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPostSprintDefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
