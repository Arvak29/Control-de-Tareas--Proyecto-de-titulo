import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareahistoriaComponent } from './tareahistoria.component';

describe('TareahistoriaComponent', () => {
  let component: TareahistoriaComponent;
  let fixture: ComponentFixture<TareahistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareahistoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareahistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
