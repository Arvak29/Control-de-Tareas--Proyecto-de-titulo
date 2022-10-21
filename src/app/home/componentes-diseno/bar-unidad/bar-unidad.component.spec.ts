import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarUnidadComponent } from './bar-unidad.component';

describe('BarUnidadComponent', () => {
  let component: BarUnidadComponent;
  let fixture: ComponentFixture<BarUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
