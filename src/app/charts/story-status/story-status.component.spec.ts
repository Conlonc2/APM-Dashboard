import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryStatusComponent } from './story-status.component';

describe('StoryStatusComponent', () => {
  let component: StoryStatusComponent;
  let fixture: ComponentFixture<StoryStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
