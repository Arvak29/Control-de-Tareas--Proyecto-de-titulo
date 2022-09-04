import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesInternasComponent } from './unidades-internas.component';

describe('UnidadesInternasComponent', () => {
  let component: UnidadesInternasComponent;
  let fixture: ComponentFixture<UnidadesInternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesInternasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesInternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
