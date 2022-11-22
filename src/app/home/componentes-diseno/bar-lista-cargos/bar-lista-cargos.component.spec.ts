import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarListaCargosComponent } from './bar-lista-cargos.component';

describe('BarListaCargosComponent', () => {
  let component: BarListaCargosComponent;
  let fixture: ComponentFixture<BarListaCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarListaCargosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarListaCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
