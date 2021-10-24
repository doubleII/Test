import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModalWindowComponent } from './first-modal-window.component';

describe('FirstModalWindowComponent', () => {
  let component: FirstModalWindowComponent;
  let fixture: ComponentFixture<FirstModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
