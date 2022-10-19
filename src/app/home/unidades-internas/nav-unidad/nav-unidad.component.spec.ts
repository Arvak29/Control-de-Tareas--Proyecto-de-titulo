import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUnidadComponent } from './nav-unidad.component';

describe('NavUnidadComponent', () => {
  let component: NavUnidadComponent;
  let fixture: ComponentFixture<NavUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
