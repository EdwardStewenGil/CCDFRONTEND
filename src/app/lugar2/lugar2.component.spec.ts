import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lugar2Component } from './lugar2.component';

describe('Lugar2Component', () => {
  let component: Lugar2Component;
  let fixture: ComponentFixture<Lugar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lugar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lugar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
