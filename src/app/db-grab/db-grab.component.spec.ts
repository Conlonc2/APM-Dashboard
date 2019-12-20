import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbGrabComponent } from './db-grab.component';

describe('DbGrabComponent', () => {
  let component: DbGrabComponent;
  let fixture: ComponentFixture<DbGrabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbGrabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbGrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
