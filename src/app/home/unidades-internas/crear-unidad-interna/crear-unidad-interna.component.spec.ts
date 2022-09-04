import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUnidadInternaComponent } from './crear-unidad-interna.component';

describe('CrearUnidadInternaComponent', () => {
  let component: CrearUnidadInternaComponent;
  let fixture: ComponentFixture<CrearUnidadInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUnidadInternaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUnidadInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
