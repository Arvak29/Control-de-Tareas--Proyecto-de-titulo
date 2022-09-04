import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFlujoDeTareasComponent } from './ver-flujo-de-tareas.component';

describe('VerFlujoDeTareasComponent', () => {
  let component: VerFlujoDeTareasComponent;
  let fixture: ComponentFixture<VerFlujoDeTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFlujoDeTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFlujoDeTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
