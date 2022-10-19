import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaSubordinadaComponent } from './tarea-subordinada.component';

describe('TareaSubordinadaComponent', () => {
  let component: TareaSubordinadaComponent;
  let fixture: ComponentFixture<TareaSubordinadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaSubordinadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaSubordinadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
