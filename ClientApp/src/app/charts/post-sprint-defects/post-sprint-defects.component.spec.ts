import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSprintDefectsComponent } from './post-sprint-defects.component';

describe('PostSprintDefectsComponent', () => {
  let component: PostSprintDefectsComponent;
  let fixture: ComponentFixture<PostSprintDefectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSprintDefectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSprintDefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
