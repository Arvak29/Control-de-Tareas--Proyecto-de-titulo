import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFlujoDeTareasComponent } from './nav-flujo-de-tareas.component';

describe('NavFlujoDeTareasComponent', () => {
  let component: NavFlujoDeTareasComponent;
  let fixture: ComponentFixture<NavFlujoDeTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFlujoDeTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFlujoDeTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
