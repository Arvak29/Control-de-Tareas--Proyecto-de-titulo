import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarResponsableComponent } from './bar-responsable.component';

describe('BarResponsableComponent', () => {
  let component: BarResponsableComponent;
  let fixture: ComponentFixture<BarResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarResponsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
