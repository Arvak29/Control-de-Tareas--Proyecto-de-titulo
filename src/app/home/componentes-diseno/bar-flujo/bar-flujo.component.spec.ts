import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFlujoComponent } from './bar-flujo.component';

describe('BarFlujoComponent', () => {
  let component: BarFlujoComponent;
  let fixture: ComponentFixture<BarFlujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarFlujoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarFlujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
