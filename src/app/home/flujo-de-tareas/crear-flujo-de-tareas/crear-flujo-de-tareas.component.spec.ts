import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFlujoDeTareasComponent } from './crear-flujo-de-tareas.component';

describe('CrearFlujoDeTareasComponent', () => {
  let component: CrearFlujoDeTareasComponent;
  let fixture: ComponentFixture<CrearFlujoDeTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFlujoDeTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFlujoDeTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
