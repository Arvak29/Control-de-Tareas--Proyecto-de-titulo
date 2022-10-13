import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSubtareaComponent } from './bar-subtarea.component';

describe('BarSubtareaComponent', () => {
  let component: BarSubtareaComponent;
  let fixture: ComponentFixture<BarSubtareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarSubtareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSubtareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
