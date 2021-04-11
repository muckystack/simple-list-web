import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Title5Component } from './title5.component';

describe('Title5Component', () => {
  let component: Title5Component;
  let fixture: ComponentFixture<Title5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Title5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Title5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
