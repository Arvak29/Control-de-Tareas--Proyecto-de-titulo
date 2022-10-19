import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarTareaComponent } from './reportar-tarea.component';

describe('ReportarTareaComponent', () => {
  let component: ReportarTareaComponent;
  let fixture: ComponentFixture<ReportarTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportarTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
