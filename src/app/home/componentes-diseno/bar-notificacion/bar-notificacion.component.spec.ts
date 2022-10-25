import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNotificacionComponent } from './bar-notificacion.component';

describe('BarNotificacionComponent', () => {
  let component: BarNotificacionComponent;
  let fixture: ComponentFixture<BarNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarNotificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
