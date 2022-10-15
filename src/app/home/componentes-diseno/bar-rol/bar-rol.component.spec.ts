import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarRolComponent } from './bar-rol.component';

describe('BarRolComponent', () => {
  let component: BarRolComponent;
  let fixture: ComponentFixture<BarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
