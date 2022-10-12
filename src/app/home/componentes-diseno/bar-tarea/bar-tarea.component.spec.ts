import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTareaComponent } from './bar-tarea.component';

describe('BarTareaComponent', () => {
  let component: BarTareaComponent;
  let fixture: ComponentFixture<BarTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
