import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCargoComponent } from './nav-cargo.component';

describe('NavCargoComponent', () => {
  let component: NavCargoComponent;
  let fixture: ComponentFixture<NavCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
