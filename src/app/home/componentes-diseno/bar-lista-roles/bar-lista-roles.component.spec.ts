import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarListaRolesComponent } from './bar-lista-roles.component';

describe('BarListaRolesComponent', () => {
  let component: BarListaRolesComponent;
  let fixture: ComponentFixture<BarListaRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarListaRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarListaRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
