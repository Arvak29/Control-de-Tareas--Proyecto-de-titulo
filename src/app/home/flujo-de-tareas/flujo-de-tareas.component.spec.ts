import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoDeTareasComponent } from './flujo-de-tareas.component';

describe('FlujoDeTareasComponent', () => {
  let component: FlujoDeTareasComponent;
  let fixture: ComponentFixture<FlujoDeTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlujoDeTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlujoDeTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
