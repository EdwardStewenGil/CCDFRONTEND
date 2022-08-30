import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lugar1Component } from './lugar1.component';

describe('Lugar1Component', () => {
  let component: Lugar1Component;
  let fixture: ComponentFixture<Lugar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lugar1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lugar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
