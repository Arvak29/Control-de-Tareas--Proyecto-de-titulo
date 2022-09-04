import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidadInternaComponent } from './editar-unidad-interna.component';

describe('EditarUnidadInternaComponent', () => {
  let component: EditarUnidadInternaComponent;
  let fixture: ComponentFixture<EditarUnidadInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUnidadInternaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarUnidadInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
