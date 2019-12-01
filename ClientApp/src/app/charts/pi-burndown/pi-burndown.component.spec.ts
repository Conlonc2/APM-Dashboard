import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiBurndownComponent } from './pi-burndown.component';

describe('PiBurndownComponent', () => {
  let component: PiBurndownComponent;
  let fixture: ComponentFixture<PiBurndownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiBurndownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiBurndownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
