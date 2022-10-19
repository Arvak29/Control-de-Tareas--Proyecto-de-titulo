import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTareaSubordinadaComponent } from './crear-tarea-subordinada.component';

describe('CrearTareaSubordinadaComponent', () => {
  let component: CrearTareaSubordinadaComponent;
  let fixture: ComponentFixture<CrearTareaSubordinadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTareaSubordinadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTareaSubordinadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
