import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarUsuarioComponent } from './bar-usuario.component';

describe('BarUsuarioComponent', () => {
  let component: BarUsuarioComponent;
  let fixture: ComponentFixture<BarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
